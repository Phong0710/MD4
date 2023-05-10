import { Request, Response } from "express";
export declare class CarController {
    private carService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    findAllASC: (req: Request, res: Response) => Promise<void>;
    findCarToId: (req: Request, res: Response) => Promise<void>;
    addCar: (req: Request, res: Response) => Promise<void>;
    editNow: (req: Request, res: Response) => Promise<void>;
    delCar: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CarController;
export default _default;
