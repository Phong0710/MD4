import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'



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
        user.password = await bcrypt.hash(user.password,10)
       return this.userRepository.save(user)

    }
    checkEmail = async (user) => {
        // let [foundUser] = await this.userRepository.find({email: user.email});
        let foundUser = await this.userRepository.findOneBy({email: user.email});
        if(foundUser){
            let comparePassword = bcrypt.compare(user.password,foundUser.password)
            if(comparePassword){
                let payload = {
                    email: foundUser.email,
                    id:foundUser.id,
                    role:foundUser.role
                }
                return jwt.sign(payload,'123456',{
                    expiresIn: 36000*100*10
                })
            }else {
                return 'Password is wrong'
            }
        }else {
            return ' User is not exist'
        }
    }

}

export default new UserService()