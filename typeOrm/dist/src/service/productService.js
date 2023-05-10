"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../entity/products");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find({
                relations: {
                    category: true,
                },
            });
            return products;
        };
        this.add = async (product) => {
            await this.productRepository.save(product);
        };
        this.findById = async (id) => {
            let product = await this.productRepository.find({
                relations: {
                    category: true,
                },
                where: {
                    id: id
                },
            });
            return product[0];
        };
        this.updateProduct = async (id, updateNow) => {
            await this.productRepository.update({ id: id }, updateNow);
        };
        this.delProductById = async (id) => {
            await this.productRepository.delete({ id: id });
        };
        this.searchShoes = async (name) => {
            let product = await this.productRepository.find({ name: { $regex: new RegExp(name, 'i') } });
            return product;
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(products_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map