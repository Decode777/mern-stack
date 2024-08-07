import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from '../server/database/db.js';
//import Connection from './database/db.js';
import router from './routes/route.js';

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);


const PORT = 8000;


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));