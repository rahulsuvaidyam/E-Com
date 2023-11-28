// src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import Api from './APIs';
import fileUpload from 'express-fileupload';
const app = express();
const PORT = process.env?.DB_URI_PORT || 8000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  useTempFiles:true,
}));
require('./DataBase/ConnectionDB');
app.use('/',Api);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
