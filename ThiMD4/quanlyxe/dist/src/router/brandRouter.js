"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brandController_1 = __importDefault(require("../controllers/brandController"));
const brandRouter = (0, express_1.Router)();
brandRouter.get('/:id', brandController_1.default.findAllBrand);
exports.default = brandRouter;
//# sourceMappingURL=brandRouter.js.map