import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors()); // Adiciona suporte a CORS
app.use(express.json());

// Endpoint para servir os produtos do arquivo JSON
app.get('/api/products', (_, res) => {
  const products = require(path.join(__dirname, '../db/products.json'));
  res.json(products);
});

module.exports = app;