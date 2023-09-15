import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Category = db.define(
  "categories",
  {
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export default Category;
