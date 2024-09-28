const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors()); // Adiciona suporte a CORS
app.use(express.json());

// Endpoint para servir os produtos do arquivo JSON
app.get('/api/products', (req, res) => {
  const products = require(path.join(__dirname, 'db/products.json'));
  res.json(products);
});

// Definindo a porta
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
