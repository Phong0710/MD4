import {Router} from "express"
import carController from "../controllers/carController";
const carRouter = Router();

carRouter.get('/',carController.findAll)
carRouter.get('/sort',carController.findAllASC)
carRouter.get('/:id',carController.findCarToId)
carRouter.post('/',carController.addCar)
carRouter.put('/:id',carController.editNow)
carRouter.delete('/:id',carController.delCar)




export default carRouter