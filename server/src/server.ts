// src/server.ts
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:3000" },
});

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });

  // Real-time communication events
});

mongoose
  .connect("mongodb://localhost:27017/real-time-comm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    server.listen(4000, () =>
      console.log("Server running on http://localhost:4000")
    )
  )
  .catch((err) => console.log(err));
