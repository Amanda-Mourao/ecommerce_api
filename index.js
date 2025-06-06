import express from "express";
import cors from 'cors';
import userRouter from "./routers/user.router.js"
import productRouter from "./routers/product.router.js"
import categoryRouter from "./routers/category.router.js"
import orderRouter from "./routers/order.router.js"

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/category', categoryRouter);
app.use('/orders', orderRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
