import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from '../server/database/db.js';

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = 8000;


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));