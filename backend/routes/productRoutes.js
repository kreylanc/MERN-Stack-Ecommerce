import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();

//  Fetch list of all products
//  @Route  GET /api/products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    //will convert the data even if it is not a JSON object to JSON
    res.json(products);
  })
);

//  Fetch the specific product detail
//  @Route  GET /api/products/:id

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //checks if the requested id matches with the id from the Product list
    const product = await Product.findById(req.params.id);

    if (product) {
      //pass the single product
      res.json(product);
    } else {
      //  set status code to 404
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
