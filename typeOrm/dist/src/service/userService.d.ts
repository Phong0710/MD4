declare class UserService {
    private userRepository;
    constructor();
    checkUser: (email: any, password: any) => Promise<any>;
    getAllUser: () => Promise<any>;
    addUser: (user: any) => Promise<void>;
    checkEmail: (user: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
