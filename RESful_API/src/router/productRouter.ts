import {Router} from "express";
import productController from "../controller/productController";
import {auth} from "../middleware/auth";

const productRouter = Router();
productRouter.use(auth,)
productRouter.get('/', productController.findAll)
productRouter.post('/', productController.addProduct);
productRouter.put('/:id', productController.editNow);
productRouter.delete('/:id', productController.delProduct);
export default productRouter;