
import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/db';
import userRoutes from './routes/auth.route';

const app = express();
app.use(express.json());
dotenv.config()
const PORT = process.env.PORT || 3000;

app.use('/api', userRoutes);

app.listen( PORT, async () => {
    console.log('Server running on port: ', PORT)
    await connectDB();
})
