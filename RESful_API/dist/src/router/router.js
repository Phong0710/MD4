"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const orderListController_1 = __importDefault(require("../controller/orderListController"));
const userRouter_1 = __importDefault(require("./userRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const router = (0, express_1.Router)();
router.get('/productDetail/:id', productController_1.default.showFromProDetail);
router.get('/search', productController_1.default.sreachName);
router.get('/cart', orderListController_1.default.showFromCart);
router.post('/addToCart', orderListController_1.default.addCartToUser);
router.get('/buyNow', orderListController_1.default.updateStatusAndShowFromBuy);
router.get('/productUser', productController_1.default.showProductUser);
router.use('/auth', userRouter_1.default);
router.use('/products', productRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map