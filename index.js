import express from "express";
import userRouter from "./routers/user.router.js";
import productRouter from "./routers/product.router.js";
import orderRouter from "./routers/order.router.js";
import categoryRouter from "./routers/category.router.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/category", categoryRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
