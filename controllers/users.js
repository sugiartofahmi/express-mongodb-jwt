import Users from "../models/users.js";
import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET;
export const register = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(200).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "failed",
    });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide an email and password",
      });
    }

    const user = await Users.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        message: "Invalid credential",
      });
    }
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credential",
      });
    }

    const token = jwt.sign({ id: user._id }, jwtSecret);

    res.status(200).json({
      message: "success",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
