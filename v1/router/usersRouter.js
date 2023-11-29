import express from 'express'
import signale from 'signale';

import { userController } from '../controllers/usersController.js';

export const userRouter = express.Router();

userRouter.get("/", userController.getAllProducts);
userRouter.get("/:id", userController.getOneProduct);
userRouter.post("/", userController.createNewProduct);
userRouter.put("/:id",userController.updateOneProduct);
userRouter.delete("/:id",userController.deleteOneProduct);