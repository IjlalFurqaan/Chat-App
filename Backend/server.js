import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`This is running on Port ${PORT}`));
