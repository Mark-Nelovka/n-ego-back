import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import loginRouter from "./routers/login";
import newsRouter from "./routers/news";

// const app = express();
// const port = 3000;
// app.get('/', (req, res) => {
//   res.send('The sedulous hyena ate the antelope!');
// });
// app.listen(port, err => {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log(`server is listening on ${port}`);
// });

// const express = require("express")
// const loginRouter = require("./routers/login") 
// const newsRouter = require("./routers/news");
// const cors = require("cors") 
// const dotenv = require("dotenv") 

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