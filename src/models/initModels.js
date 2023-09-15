import Category from "./categories.models.js";
import Task from "./tasks.models.js";
import User from "./users.models.js";

const initModels = () => {
  // un usuario puede tener muchas tareas
  User.hasMany(Task, { foreignKey: "userId" });
  // una tarea es creada por un usuario
  Task.belongsTo(User, { foreignKey: "userId" });

  // una tarea tiene una categoria
  Task.belongsTo(Category, { foreignKey: "categoryId" });
  Category.hasMany(Task, { foreignKey: "categoryId" });
};

export default initModels;
