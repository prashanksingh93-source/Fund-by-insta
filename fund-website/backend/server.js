import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// Database
connectDB();

// Test
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Fund Website Backend is running",
  });
});


app.use((req, res, next) => {
  console.log("REQUEST:", req.method, req.originalUrl);
  next();
});
// Auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});