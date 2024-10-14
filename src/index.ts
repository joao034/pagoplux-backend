
import dotenv from 'dotenv';
import express from 'express';


const app = express();
dotenv.config()

app.listen( 3000, () => {
    console.log('Server running')
})