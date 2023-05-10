"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.render('index', { products: listProduct });
        };
        this.showFromAdd = (req, res) => {
            res.render('products/create');
        };
        this.addProducts = (req, res) => {
            this.productService.add(req.body);
            res.redirect(301, '/products');
        };
        this.showFromEdit = async (req, res) => {
            let id = req.params.id;
            let product = await this.productService.findById(id);
            res.render('products/edit', { name: product.name, price: product.price, quantity: product.quantity, image: product.image });
        };
        this.editProduct = async (req, res) => {
            let id = req.params.id;
            let updateNow = req.body;
            await this.productService.updateProduct(id, updateNow);
            res.redirect(301, '/products');
        };
        this.deleteNow = async (req, res) => {
            let id = req.params.id;
            await this.productService.delById(id);
            res.redirect(301, '/products');
        };
        this.productService = productService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map