import mongoose from "moongoose";

const UserSchema = new mongoose.schema(
  {
    username: {
      type: string,
      required: true,
      unique: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);

export default User;
