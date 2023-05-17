import express from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import todos from "./routes/todos.js";
import users from "./routes/users.js";
import auth from "./middleware/auth.js";

config();
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/todos", auth, todos);
app.use("/api/user", users);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(port, () => console.log(`Server running on port ${port}`));
