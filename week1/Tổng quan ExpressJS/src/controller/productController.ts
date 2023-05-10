import {Request, Response} from "express";
import productService from "../service/productService";

class ProductController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.productService.getAll()

        res.render('index', {products: listProduct})
    }
    showFromAdd = (req: Request, res: Response) => {
        res.render('products/create')
    }
    addProducts = (req: Request, res: Response) => {
        this.productService.add(req.body);
        res.redirect(301, '/products')
    }
    showFromEdit = async (req: Request, res: Response) => {
        let id = req.params.id
        let product = await this.productService.findById(id)
        res.render('products/edit', {name: product.name,price:product.price,quantity:product.quantity,image:product.image})
    }
    editProduct = async (req: Request, res: Response) => {
        let id = req.params.id
        let updateNow = req.body
       await this.productService.updateProduct(id, updateNow)
        res.redirect(301, '/products')
    }
    deleteNow = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.productService.delById(id)
        res.redirect(301, '/products')
    }
}

export default new ProductController();