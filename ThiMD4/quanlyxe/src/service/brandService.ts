import {AppDataSource} from "../data-source";
import {Brand} from "../entity/brand";

class BrandService {
    private brandRepository;
    constructor() {
        this.brandRepository = AppDataSource.getRepository(Brand)
    }

    getAllBrand = async (id) => {
        let brands = await this.brandRepository.find({
            relations:{
                cars:true
            },where:{
                id:id
            }
        });
        return brands
    }
}
export default new BrandService()