export class TransactionService {

  static async getTransactionByIdFromPagoPlux(id: string) {

    const pagopluxApiURL = process.env.PAGOPLUX_API_URL;
    const clientId = process.env.CLIENT_ID;
    const secretKey   = process.env.SECRET_KEY;

    const credentials = Buffer.from(`${clientId}:${secretKey}`).toString("base64");

    const res = await fetch(
      `${ pagopluxApiURL }/getTransactionByIdStateResource?idTransaction=${ id }`,{
        method: 'GET',
        headers: {
            'Authorization': `Basic ${ credentials }`,
            'Content-Type' : 'application/json'
        }
      }
    );
    const data = await res.json();

    return data;
  }
}