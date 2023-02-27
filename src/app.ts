import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import loginRouter from "./routers/login";
import newsRouter from "./routers/news";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/login", loginRouter);
app.use("/news", newsRouter);


app.use((req, res) => {
  res.status(404).json({ message: "404 Not found" });
});

app.use((req, res) => {
  res.status(500).json({ message: res.statusMessage });
});

app.listen(4040, () => {
    console.log("Database connection successful");
});

module.exports = app;