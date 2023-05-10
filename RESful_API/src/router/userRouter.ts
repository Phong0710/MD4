import {Router} from "express";
import userController from "../controller/userController";



const userRouter = Router();
// userRouter.get('/login',userController.showFromLogin);
// userRouter.get('/createAccount',userController.showFromCreateAccount)
userRouter.post('/register',userController.register);
userRouter.post('/login',userController.login);
export default userRouter;