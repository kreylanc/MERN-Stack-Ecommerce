// to hash the password
import bcrypt from "bcryptjs";

//create static users
const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "Ben Dover",
    email: "ben@gmail.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Sugon Deez",
    email: "sugon@gmail.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
