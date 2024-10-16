
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import { userRoutes, transactionRoutes } from './routes';


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use( '/api/auth', userRoutes );
app.use( '/api/transaction', transactionRoutes )

app.listen( PORT, async () => {
    console.log('Server running on port: ', PORT)
    await connectDB();
})
