import { Router } from "express";
import {
  allTasks,
  createTask,
  deleteTask,
  updateTask,
} from "./task.controllers.js";

const router = Router();

router.route("/task").get(allTasks).post(createTask);

router.route("/task/:id").put(updateTask).delete(deleteTask);

export default router;
