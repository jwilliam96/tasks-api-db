import User from "../../models/users.models.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createUsers = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export { createUsers, getAllUsers };
