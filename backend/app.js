import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();
app.use(express.json());

app.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://engger:engger2k@cluster0.xobdh.mongodb.net/BlogApp?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Connected TO Duc dz"))
  .catch((err) => console.log(err));
