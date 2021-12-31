import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, handleError } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("App is running");
});

//  All request made from this url is handled by productRoutes
app.use("/api/products", productRoutes);

//  Middleware to handle 404 (Not Found) error
app.use(notFound);

//  Middleware to handle errors
app.use(handleError);

const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(`Listening on port ${port} in ${process.env.NODE_ENV} mode`)
);
