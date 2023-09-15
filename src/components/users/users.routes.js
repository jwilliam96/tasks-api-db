import { Router } from "express";
import { createUsers, getAllUsers, tasksByUser } from "./users.controllers.js";

const router = Router();

router.route("/user").get(getAllUsers).post(createUsers);

router.route("/user/:id").get(tasksByUser);

export default router;
