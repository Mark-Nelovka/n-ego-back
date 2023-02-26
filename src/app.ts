
import express from "express";
// import express from "express";
import loginRouter from "./routers/login";
import newsRouter from "./routers/news";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/login", loginRouter);
app.use("/news", newsRouter);


app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ message: "404 Not found" });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(4040, () => {
    console.log("Database connection successful");
});

module.exports = app;