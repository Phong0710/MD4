import { Request, Response } from "express";
declare class OrderListController {
    private orderListService;
    constructor();
    updateStatusAndShowFromBuy: (req: Request, res: Response) => Promise<void>;
    showFromCart: (req: Request, res: Response) => Promise<void>;
    addCartToUser: (req: Request, res: Response) => Promise<void>;
}
declare const _default: OrderListController;
export default _default;
