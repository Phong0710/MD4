import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import e from "express";


class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    checkUser = async (email,password) => {
        let userFind = await this.userRepository.find({
            where: {
                email: email,
                password: password
            }
        })
        return userFind[0];
    }

    getAllUser = async () => {
        let users = await this.userRepository.find();
        return users
    }
    addUser = async (user) => {
        await this.userRepository.save(user)
    }
    checkEmail = async (user) => {
        // let [foundUser] = await this.userRepository.find({email: user.email});
        let foundUser = await this.userRepository.findOneBy({email: user.email});
        return foundUser
    }
}

export default new UserService()