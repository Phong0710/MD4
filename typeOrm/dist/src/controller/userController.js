"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.showFromLogin = async (req, res) => {
            await this.userService.getAllUser();
            res.render('user/login');
        };
        this.login = async (req, res) => {
            let { email, password } = req.body;
            let user = await this.userService.checkUser(email, password);
            if (!user) {
                res.redirect(301, '/login');
            }
            else {
                req.session['user'] = user;
                if (user['role'] === 1) {
                    res.redirect(301, '/productUser');
                }
                else {
                    res.redirect(301, '/products');
                }
            }
        };
        this.showFromCreateAccount = async (req, res) => {
            res.render('user/createAccount');
        };
        this.createAccount = async (req, res) => {
            let gmail = await this.userService.checkEmail(req.body);
            if (!gmail) {
                await this.userService.addUser(req.body);
                res.redirect(301, '/login');
            }
            else {
                const errorMessage = 'Thông tin đăng ký đã tồn tại';
                res.render('user/createAccount', { errorMessage: errorMessage });
            }
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map