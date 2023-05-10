import {AppDataSource} from "../data-source";
import {Car} from "../entity/car";

class CarService{
    private carRepository;
    constructor() {
        this.carRepository = AppDataSource.getRepository(Car)
    }
    getAllCAr = async ()=>{
        let listCars = await this.carRepository.find({
            relations:{
                brand:true
            }
        })
        return listCars
    }
    getCarById = async (id)=>{
        let listCars = await this.carRepository.findOne({
            relations:{
                brand:true
            },where:{
                id:id
            }
        })
        return listCars
    }
    createCar = async (car)=>{
        await this.carRepository.save(car)
    }

    updateCar = async (idCar,updateNow)=>{
        await this.carRepository.update({id:idCar},updateNow)
    }

    removeCarById = async (idCar)=>{
        await this.carRepository.delete({id:idCar})
    }
    sortCar = async ()=>{
        let listCars = await this.carRepository.find({
            relations:{
                brand:true
            },
            order:{
                priceCar:'ASC'
            }
        })
        return listCars
    }
}
export default new CarService()