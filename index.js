import express from "express";
import nunjucks from "nunjucks";
import Routes from "./routes/main.js";

const app = express();
const port = 3000;
app.use(express.static("public"));

nunjucks.configure("views", {
    autoescape: true,
    express: app
});

app.use("/", Routes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});