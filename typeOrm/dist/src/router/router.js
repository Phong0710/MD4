"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const router = (0, express_1.Router)();
router.get('', productController_1.default.showHome);
router.get('/products', productController_1.default.findAll);
exports.default = router;
//# sourceMappingURL=router.js.map