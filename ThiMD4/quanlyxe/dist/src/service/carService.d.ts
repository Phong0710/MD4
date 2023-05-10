declare class CarService {
    private carRepository;
    constructor();
    getAllCAr: () => Promise<any>;
    getCarById: (id: any) => Promise<any>;
    createCar: (car: any) => Promise<void>;
    updateCar: (idCar: any, updateNow: any) => Promise<void>;
    removeCarById: (idCar: any) => Promise<void>;
    sortCar: () => Promise<any>;
}
declare const _default: CarService;
export default _default;
