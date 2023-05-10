import {Router} from "express"
import brandController from "../controllers/brandController";
const brandRouter = Router();


brandRouter.get('/:id',brandController.findAllBrand)





export default brandRouter