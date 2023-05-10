"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const car_1 = require("../entity/car");
class CarService {
    constructor() {
        this.getAllCAr = async () => {
            let listCars = await this.carRepository.find({
                relations: {
                    brand: true
                }
            });
            return listCars;
        };
        this.getCarById = async (id) => {
            let listCars = await this.carRepository.findOne({
                relations: {
                    brand: true
                }, where: {
                    id: id
                }
            });
            return listCars;
        };
        this.createCar = async (car) => {
            await this.carRepository.save(car);
        };
        this.updateCar = async (idCar, updateNow) => {
            await this.carRepository.update({ id: idCar }, updateNow);
        };
        this.removeCarById = async (idCar) => {
            await this.carRepository.delete({ id: idCar });
        };
        this.sortCar = async () => {
            let listCars = await this.carRepository.find({
                relations: {
                    brand: true
                },
                order: {
                    priceCar: 'ASC'
                }
            });
            return listCars;
        };
        this.carRepository = data_source_1.AppDataSource.getRepository(car_1.Car);
    }
}
exports.default = new CarService();
//# sourceMappingURL=carService.js.map