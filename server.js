import "dotenv/config";
import app from "./src/app.js";

// Server port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server API is running on http://localhost:${PORT}`);
});
