import { Router } from "express";
import { createUsers, getAllUsers } from "./users.controllers.js";

const router = Router();

router.route("/user").get(getAllUsers).post(createUsers);

export default router;
