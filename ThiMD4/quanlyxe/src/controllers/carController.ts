import {Request, Response} from "express";
import carService from "../service/carService";


export class CarController{
    private carService;

    constructor() {
        this.carService = carService;
    }
    findAll = async (req: Request, res: Response) => {
        let listCars = await this.carService.getAllCAr()
        res.status(200).json(listCars)
    }
    findAllASC = async (req: Request, res: Response) => {
        let listCars = await this.carService.sortCar()
        res.status(200).json(listCars)
    }
    findCarToId = async (req: Request, res: Response) => {
        let id = parseInt(req.params.id)
        let car = await this.carService.getCarById(id)
        res.status(200).json(car)
    }
    addCar = async (req: Request, res: Response) => {
        await this.carService.createCar(req.body);
        res.status(200).json({
            message:'OK add car'
        })
    }
    editNow = async (req: Request, res: Response) => {
        let id = req.params.id
        let data = req.body;
        await this.carService.updateCar(id, data)
        res.status(200).json({
            message:'OK edit'
        })
    }
    delCar = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.carService.removeCarById(id);
        res.status(200).json({
            message:'OK delete car'
        })
    }
}


export default new CarController();