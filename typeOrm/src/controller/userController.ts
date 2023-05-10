import {Request, Response} from "express";
import userService from "../service/userService";



class UserController {
    private userService;

    constructor() {
        this.userService = userService;
    }

    showFromLogin = async (req: Request, res: Response) => {
       await  this.userService.getAllUser();
        res.render('user/login')
    }
    login = async (req: Request, res: Response) => {
        let { email, password } = req.body;
        let user = await this.userService.checkUser(email, password)
        if (!user) {
            res.redirect(301, '/login')
        } else {
            req.session['user'] = user;
            if (user['role'] === 1) {
                res.redirect(301, '/productUser')
            } else {
                res.redirect(301, '/products')
            }
        }
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