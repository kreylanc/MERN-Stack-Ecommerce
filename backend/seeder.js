import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
//connect to mongoDB
connectDB();

const importData = async () => {
  try {
    //delete any existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    //Add all the value from users array
    const createdUsers = await User.insertMany(users);
    //currently the admin user is on 0 index (hard coded)
    const adminUser = createdUsers[0]._id;

    //map through products array
    //destructure the products and add a user variable with adminUser
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported");

    process.exit();
  } catch (error) {
    console.error(error);
    //end process with error
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    //delete any existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log("Data Destroyed");

    process.exit();
  } catch (error) {
    console.error(error);
    //end process with error
    process.exit(1);
  }
};

//run "npm run data:import/data:destroy" in console
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
