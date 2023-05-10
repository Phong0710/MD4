import { Request, Response } from "express";
declare class UserController {
    private userService;
    constructor();
    register: (req: Request, res: Response) => Promise<void>;
    showFromLogin: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    showFromCreateAccount: (req: Request, res: Response) => Promise<void>;
    createAccount: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
