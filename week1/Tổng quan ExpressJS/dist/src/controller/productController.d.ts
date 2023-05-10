import { Request, Response } from "express";
declare class ProductController {
    private productService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    showFromAdd: (req: Request, res: Response) => void;
    addProducts: (req: Request, res: Response) => void;
    showFromEdit: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    deleteNow: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
