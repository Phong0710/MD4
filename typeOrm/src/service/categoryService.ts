import {Category} from "../entity/category";
import {AppDataSource} from "../data-source";


class CategoryService {
    private categoryRepository;
    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category)
    }

    getAllCategory = async () => {
        let category = await this.categoryRepository.find();
        return category
    }
}
export default new CategoryService()