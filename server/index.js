import dotenv from 'dotenv';
import express from 'express';
import connectDB from '../server/database/db.js';

dotenv.config();
connectDB();
const app = express();

const PORT = 8000;


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));