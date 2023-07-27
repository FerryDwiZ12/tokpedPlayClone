const express = require("express");
const { connectToDatabase } = require("./config/db");

const app = express();
const PORT = process.env.PORT || 8000;

// Routes
const videoRoutes = require("./routes/vidios.routes");
const productRoutes = require("./routes/product.routes");
const commentRoutes = require("./routes/comment.routes");

// Middleware
app.use(express.json());
app.use("/videos", videoRoutes);
app.use("/products", productRoutes);
app.use("/comments", commentRoutes);

// Connect to MongoDB and Start the server
async function startServer() {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
}

startServer();
