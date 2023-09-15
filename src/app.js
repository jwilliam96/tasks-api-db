import express from "express";
import db from "./utils/database.js";
import initModels from "./models/initModels.js";
import userRouter from "./components/users/users.routes.js";
import categoryRouter from "./components/category/category.routes.js";
import taksRouter from "./components/task/task.routes.js";
import cors from "cors";

initModels();

db.authenticate()
  .then(() => {
    console.log("conexion correcta");
  })
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log("base de dato sincronizado"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter, categoryRouter, taksRouter);

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${PORT}`);
});
