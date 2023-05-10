import { Request, Response } from "express";
declare class ProductController {
    private productService;
    private categoryService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    showHome: (req: Request, res: Response) => Promise<void>;
    showFromAdd: (req: Request, res: Response) => Promise<void>;
    addProduct: (req: Request, res: Response) => Promise<void>;
    showFromEdit: (req: Request, res: Response) => Promise<void>;
    editNow: (req: Request, res: Response) => Promise<void>;
    delProduct: (req: Request, res: Response) => Promise<void>;
    showFromProDetail: (req: Request, res: Response) => Promise<void>;
    sreachName: (req: Request, res: Response) => Promise<void>;
    showProductUser: (req: Request, res: Response) => Promise<void>;
    showFromLogin: (req: Request, res: Response) => Promise<void>;
    showFromCreateAccount: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
