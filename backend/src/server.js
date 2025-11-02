import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    msg: "success from backend",
  });
});

app.listen(3000, () => console.log("server is running on port 3000"));
