"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const carService_1 = __importDefault(require("../service/carService"));
class CarController {
    constructor() {
        this.findAll = async (req, res) => {
            let listCars = await this.carService.getAllCAr();
            res.status(200).json(listCars);
        };
        this.findAllASC = async (req, res) => {
            let listCars = await this.carService.sortCar();
            res.status(200).json(listCars);
        };
        this.findCarToId = async (req, res) => {
            let id = parseInt(req.params.id);
            let car = await this.carService.getCarById(id);
            res.status(200).json(car);
        };
        this.addCar = async (req, res) => {
            await this.carService.createCar(req.body);
            res.status(200).json({
                message: 'OK add car'
            });
        };
        this.editNow = async (req, res) => {
            let id = req.params.id;
            let data = req.body;
            await this.carService.updateCar(id, data);
            res.status(200).json({
                message: 'OK edit'
            });
        };
        this.delCar = async (req, res) => {
            let id = req.params.id;
            await this.carService.removeCarById(id);
            res.status(200).json({
                message: 'OK delete car'
            });
        };
        this.carService = carService_1.default;
    }
}
exports.CarController = CarController;
exports.default = new CarController();
//# sourceMappingURL=carController.js.map