import {Router} from "express";
import productController from "../controller/productController";
import userController from "../controller/userController";
import cartController from "../controller/orderListController";
import userRouter from "./userRouter";
import productRouter from "./productRouter";

const router = Router();
// router.get('', productController.showHome)
//
// router.get('/products', productController.findAll)
// // router.get('/create', productController.showFromAdd);
// router.post('/create' , productController.addProduct);
// router.get('/edit/:id' , productController.showFromEdit);
// router.put('/edit/:id' , productController.editNow);
// router.delete('/delete/:id' , productController.delProduct);


router.get('/productDetail/:id', productController.showFromProDetail);
router.get('/search',productController.sreachName)

router.get('/cart',cartController.showFromCart)
router.post('/addToCart',cartController.addCartToUser)
router.get('/buyNow',cartController.updateStatusAndShowFromBuy)

// router.get('/login', userController.showFromLogin);
// router.post('/login', userController.login);
// router.get('/createAccount', userController.showFromCreateAccount);
// router.post('/createAccount', userController.createAccount);

router.get('/productUser', productController.showProductUser);

router.use('/auth',userRouter)
router.use('/products',productRouter)

// function checkAdmin(req, res, next) {
//     let user = req.session['user'];
//     if (req.session['user']) {
//         if (user['role'] === 0) next()
//         else res.redirect(301, '/login')
//     } else res.redirect(301, '/login')
// }
//
// function checkUser(req, res, next) {
//     let user = req.session['user'];
//     if (req.session['user']) {
//         if (user['role'] === 1) next()
//         else res.redirect(301, '/login')
//     } else res.redirect(301, '/login')
// }

export default router;
