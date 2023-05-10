"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const brand_1 = require("../entity/brand");
class BrandService {
    constructor() {
        this.getAllBrand = async (id) => {
            let brands = await this.brandRepository.find({
                relations: {
                    cars: true
                }, where: {
                    id: id
                }
            });
            return brands;
        };
        this.brandRepository = data_source_1.AppDataSource.getRepository(brand_1.Brand);
    }
}
exports.default = new BrandService();
//# sourceMappingURL=brandService.js.map