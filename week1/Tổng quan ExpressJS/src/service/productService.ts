
import {Product} from "../enity/products";


class ProductService {
    constructor() {
    }

    getAll = async () => {
        let products = await Product.find()
        return products
    }
    add = async (product) => {
        await Product.create(product)
    }


    findById = async (id) => {
        let product = await Product.find({_id: id})
        return product[0]
    }
    updateProduct = async (id, updateNow) => {
        await Product.updateOne({_id: `${id}`}, updateNow);
    }
    delById = async (id) => {
        await Product.deleteOne({_id: `${id}`})
    }
}

export default new ProductService();