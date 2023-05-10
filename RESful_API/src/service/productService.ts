import {Product} from "../entity/products";
import {AppDataSource} from "../data-source";

class ProductService {
    private productRepository;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
    }

    getAll = async () => {
        let products = await this.productRepository.find({
            relations: {
                category: true,
            },
        });


        return products
    }
    add = async (product) => {
        await this.productRepository.save(product)
    }
    findById = async (id) => {
        let product = await this.productRepository.find(
            {
                relations: {
                    category: true,
                },
                where: {
                    id: id
                },
            }
        )
        return product[0]
    }
    updateProduct = async (id, updateNow) => {
        await this.productRepository.update({id: id}, updateNow)
    }
    delProductById = async (id) => {
        await this.productRepository.delete({id: id})
    }
    searchShoes = async (name) => {
        let product = await this.productRepository.find({name: {$regex: new RegExp(name, 'i')}})
        return product;
    }
}

export default new ProductService();