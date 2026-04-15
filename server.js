import app from "./src/app.js";

// Server port
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
