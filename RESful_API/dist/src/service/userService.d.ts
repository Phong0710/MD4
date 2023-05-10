declare class UserService {
    private userRepository;
    constructor();
    checkUser: (email: any, password: any) => Promise<any>;
    getAllUser: () => Promise<any>;
    addUser: (user: any) => Promise<any>;
    checkEmail: (user: any) => Promise<string>;
}
declare const _default: UserService;
export default _default;
