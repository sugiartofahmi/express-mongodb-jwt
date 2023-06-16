import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    trim: true,
    required: [true, "Please add  title"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Todo", TodoSchema);
