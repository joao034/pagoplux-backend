import { Request, Response, Router } from "express";
import { TransactionController } from "../controllers";

export const transactionRoutes = Router();

transactionRoutes.get("/", TransactionController.getTransactionById);

transactionRoutes.get("/t", async (req, res) => {
  const clientId = process.env.CLIENT_ID;
  const secretKey = process.env.SECRET_KEY;

  const id = "2d9290ac-22c2-42f6-9872-2dce529194e6";
  console.log(clientId, secretKey);

  // Codificar las credenciales en Base64
  const credentials = Buffer.from(`${clientId}:${secretKey}`).toString(
    "base64"
  );

  try {
    const response = await fetch(
      `https://apipre.pagoplux.com/intv1/integrations/getTransactionByIdStateResource?idTransaction=${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    // Devolver la respuesta al cliente
    res.json(data);
  } catch (error) {
    // Manejar errores y enviar una respuesta adecuada
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching transaction", error });
  }
});

