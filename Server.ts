// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import Api from './APIs';

const app = express();
const PORT = process.env?.DB_URI_PORT || 8000;

require('./DataBase/ConnectionDB');
app.use('/',Api);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
