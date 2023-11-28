import express from "express";
import signale from "signale";
import { productsRouter } from "./v1/router/productsRouter.js";
import { userRouter } from "./v1/router/usersRouter.js";
const app = express()

app.use(express.json())
app.use("/api/user",userRouter);
app.use("/api/sensor",productsRouter);

app.listen(3000, ()=> {
    signale.success("Server online in port 3000")
})