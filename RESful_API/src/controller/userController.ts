import {Request, Response} from "express";
import userService from "../service/userService";



class UserController {
    private userService;

    constructor() {
        this.userService = userService;
    }
    register = async (req:Request,res:Response)=>{
        await  this.userService.addUser(req.body)
        res.status(201).json('Create User Success')
    }


    showFromLogin = async (req: Request, res: Response) => {
       await  this.userService.getAllUser();
        res.render('user/login')
    }
    login = async (req: Request, res: Response) => {
        let user = await this.userService.checkEmail(req.body)
        res.status(200).json(user)
    }
    showFromCreateAccount = async (req: Request, res: Response) => {
        res.render('user/createAccount')
    }
    createAccount = async (req: Request, res: Response) => {
        let gmail = await this.userService.checkEmail(req.body);
        if (!gmail) {
            await this.userService.addUser(req.body)
            res.redirect(301, '/login')
        } else {
            const errorMessage = 'Thông tin đăng ký đã tồn tại';
            res.render('user/createAccount', {errorMessage: errorMessage})
        }

    }
}

export default new UserController();