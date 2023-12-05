import User from "../Models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (e) {
    res.status(500).json(e.message);
  }
};
