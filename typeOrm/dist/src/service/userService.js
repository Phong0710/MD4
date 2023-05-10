"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = require("../data-source");
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
            await this.userRepository.save(user);
        };
        this.checkEmail = async (user) => {
            let foundUser = await this.userRepository.findOneBy({ email: user.email });
            return foundUser;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map