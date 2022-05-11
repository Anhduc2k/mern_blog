import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

app.use(cors());
const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://engger:engger2k@cluster0.xobdh.mongodb.net/BlogApp?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Connected TO Duc dz"))
  .catch((err) => console.log(err));
