import Category from "../../models/categories.models.js";
import Task from "../../models/tasks.models.js";
import User from "../../models/users.models.js";

const allTasks = async (req, res) => {
  // SELECT * FORM autos
  // SELECT id, name, year FROM autos
  try {
    const task = await Task.findAll({
      // atributos de tareas
      attributes: ["id", "title", "description", "completed"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Category,
          // atributos de Brand
          attributes: ["name"],
        },
      ],
    });
    res.json(task);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const { body } = req;

    const newTask = await Task.create(body);
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const task = await Task.update(body, {
      where: { id: id },
    });
    res.status(204).json(task);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

export { createTask, allTasks, updateTask, deleteTask };
