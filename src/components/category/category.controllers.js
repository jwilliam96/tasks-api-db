import Category from "../../models/categories.models.js";

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createCategory = async (req, res) => {
  try {
    const { body } = req;
    const category = await Category.create(body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
};

export { createCategory, getAllCategories };
