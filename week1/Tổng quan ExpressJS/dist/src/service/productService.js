"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../enity/products");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await products_1.Product.find();
            return products;
        };
        this.add = async (product) => {
            await products_1.Product.create(product);
        };
        this.findById = async (id) => {
            let product = await products_1.Product.find({ _id: id });
            return product[0];
        };
        this.updateProduct = async (id, updateNow) => {
            await products_1.Product.updateOne({ _id: `${id}` }, updateNow);
        };
        this.delById = async (id) => {
            await products_1.Product.deleteOne({ _id: `${id}` });
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map