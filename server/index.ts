import express from "express";
import connectDB from "./src/db";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
