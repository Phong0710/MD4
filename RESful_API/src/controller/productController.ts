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
        res.status(200).json(listProduct)
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
       res.status(201).json({
           message:'OK'
       })
    }
    showFromEdit = async (req: Request, res: Response) => {
        let id = req.params.id
        let product = await this.productService.findById(id);
         // await this.categoryService.getAllCategory()
        res.status(200).json(product)}

    editNow = async (req: Request, res: Response) => {
        let id = req.params.id
        let data = req.body;
        await this.productService.updateProduct(id, data)
        res.status(202).json({
            message:'OK edit'
        })
    }
    delProduct = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.productService.delProductById(id);
       res.status(210).json({
           message:'OK delete'
       })
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