const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Endpoint para servir os produtos do arquivo JSON
app.get('/api/produtos', (req, res) => {
  try {
    const products = require(path.join(__dirname, 'db/produtos.json'));
    res.json(products);
  } catch (error) {
    console.error(error); // Log do erro
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Definindo a porta
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
