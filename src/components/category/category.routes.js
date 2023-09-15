import { Router } from "express";
import { createCategory, getAllCategories } from "./category.controllers.js";

const router = Router();

router.route("/category").post(createCategory);
router.route("/categories").get(getAllCategories);

export default router;
