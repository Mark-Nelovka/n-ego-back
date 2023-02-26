
import { Request, Response, NextFunction } from "express";
import express from "express";
import loginRouter from "./src/routers/login";
import newsRouter from "./src/routers/news";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/login", loginRouter);
app.use("/news", newsRouter);


app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "404 Not found" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(4040, () => {
    console.log("Database connection successful");
});

module.exports = app;