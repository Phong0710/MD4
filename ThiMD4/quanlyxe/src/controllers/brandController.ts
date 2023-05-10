import {Request, Response} from "express";
import brandService from "../service/brandService";
export class brandController{
    private brandService;

    constructor() {
        this.brandService = brandService;
    }
    findAllBrand = async (req: Request, res: Response) => {
        let id = parseInt(req.params.id)
        console.log(id)
        let listCarsOfBrand = await this.brandService.getAllBrand(id)
        res.status(200).json(listCarsOfBrand)
    }


}


export default new brandController();