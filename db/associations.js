import sequelize from "./index.js";
import User from "../models/User.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Category from "../models/Category.js";

User.hasMany(Order, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
});
Order.belongsTo(User, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
  onDelete: "CASCADE",
});

Order.hasMany(Product, {
  foreignKey: {
    allowNull: false,
    name: "orderId",
  },
});

Product.hasMany(Order, {
  foreignKey: {
    allowNull: false,
    name: "orderId",
  },
});

Category.hasMany(Product, {
  foreignKey: {
    allowNull: false,
    name: "categoryId",
  },
});
Product.belongsTo(Category, {
  foreignKey: {
    allowNull: false,
    name: "categoryId",
  },
  onDelete: "CASCADE",
});

sequelize.sync();
