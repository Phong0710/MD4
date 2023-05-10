import {Request, Response} from "express";
import productService from "../service/productService";
import categoryService from "../service/categoryService";


class ProductController {
    private productService;
    private categoryService

    constructor() {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.productService.getAll()
        res.render('index', {products: listProduct})
    }
    showHome = async (req: Request, res: Response) => {
        let listProduct = await this.productService.getAll()
        res.render('home', {products: listProduct})
    }
    showFromAdd = async (req: Request, res: Response) => {
        let listCategory = await this.categoryService.getAllCategory()
        res.render('products/create', {category: listCategory})
    }
    addProduct = async (req: Request, res: Response) => {
        await this.productService.add(req.body);
        res.redirect(301, '/products')
    }
    showFromEdit = async (req: Request, res: Response) => {
        let id = req.params.id
        let product = await this.productService.findById(id);
        let listCategory = await this.categoryService.getAllCategory();
        res.render('products/edit', {
            name: product.name,
            price: product.price,
            size: product.size,
            quantity: product.quantity,
            image: product.image,
            category: listCategory
        })
    }
    editNow = async (req: Request, res: Response) => {
        let id = req.params.id
        let data = req.body;
        await this.productService.updateProduct(id, data)
        res.redirect(301, '/products')
    }
    delProduct = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.productService.delProductById(id);
        res.redirect(301, '/products')
    }
    showFromProDetail = async (req: Request, res: Response) => {
        let id = req.params.id
        let product = await this.productService.findById(id);
        await this.categoryService.getAllCategory()
        res.render('products/productDetail', {item: product})
    }

    sreachName = async (req: Request, res: Response) => {
        let name = req.query.searchBox
        let productName = await this.productService.searchShoes(name)
        res.render('user/searchUser',{products:productName})
    }
    showProductUser = async (req: Request, res: Response) => {
        let listProduct = await this.productService.getAll()
        res.render('indexUser', {products: listProduct})
    }
    showFromLogin = async (req: Request, res: Response) => {
        res.render('user/login')
    }
    showFromCreateAccount = async (req: Request, res: Response) => {
        res.render('user/createAccount.ejs')
    }
}

export default new ProductController();