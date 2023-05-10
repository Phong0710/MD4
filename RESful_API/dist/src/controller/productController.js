"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.status(200).json(listProduct);
        };
        this.showHome = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.render('home', { products: listProduct });
        };
        this.showFromAdd = async (req, res) => {
            let listCategory = await this.categoryService.getAllCategory();
            res.render('products/create', { category: listCategory });
        };
        this.addProduct = async (req, res) => {
            await this.productService.add(req.body);
            res.status(201).json({
                message: 'OK'
            });
        };
        this.showFromEdit = async (req, res) => {
            let id = req.params.id;
            let product = await this.productService.findById(id);
            res.status(200).json(product);
        };
        this.editNow = async (req, res) => {
            let id = req.params.id;
            let data = req.body;
            await this.productService.updateProduct(id, data);
            res.status(202).json({
                message: 'OK edit'
            });
        };
        this.delProduct = async (req, res) => {
            let id = req.params.id;
            await this.productService.delProductById(id);
            res.status(210).json({
                message: 'OK delete'
            });
        };
        this.showFromProDetail = async (req, res) => {
            let id = req.params.id;
            let product = await this.productService.findById(id);
            await this.categoryService.getAllCategory();
            res.render('products/productDetail', { item: product });
        };
        this.sreachName = async (req, res) => {
            let name = req.query.searchBox;
            let productName = await this.productService.searchShoes(name);
            res.render('user/searchUser', { products: productName });
        };
        this.showProductUser = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.render('indexUser', { products: listProduct });
        };
        this.showFromLogin = async (req, res) => {
            res.render('user/login');
        };
        this.showFromCreateAccount = async (req, res) => {
            res.render('user/createAccount.ejs');
        };
        this.productService = productService_1.default;
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map