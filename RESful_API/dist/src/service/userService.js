"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserService {
    constructor() {
        this.checkUser = async (email, password) => {
            let userFind = await this.userRepository.find({
                where: {
                    email: email,
                    password: password
                }
            });
            return userFind[0];
        };
        this.getAllUser = async () => {
            let users = await this.userRepository.find();
            return users;
        };
        this.addUser = async (user) => {
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return this.userRepository.save(user);
        };
        this.checkEmail = async (user) => {
            let foundUser = await this.userRepository.findOneBy({ email: user.email });
            if (foundUser) {
                let comparePassword = bcrypt_1.default.compare(user.password, foundUser.password);
                if (comparePassword) {
                    let payload = {
                        email: foundUser.email,
                        id: foundUser.id,
                        role: foundUser.role
                    };
                    return jsonwebtoken_1.default.sign(payload, '123456', {
                        expiresIn: 36000 * 100 * 10
                    });
                }
                else {
                    return 'Password is wrong';
                }
            }
            else {
                return ' User is not exist';
            }
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map