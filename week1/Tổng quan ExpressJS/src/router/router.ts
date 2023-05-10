import {Router} from "express";
import productController from "../controller/productController";

const router = Router();
router.get('/products',productController.findAll);
router.get('/create',productController.showFromAdd);
router.post('/create', productController.addProducts)
router.get('/edit/:id',productController.showFromEdit)
router.post('/edit/:id',productController.editProduct)
router.get('/delete/:id',productController.deleteNow)

export default router;