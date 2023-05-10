"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carController_1 = __importDefault(require("../controllers/carController"));
const carRouter = (0, express_1.Router)();
carRouter.get('/', carController_1.default.findAll);
carRouter.get('/sort', carController_1.default.findAllASC);
carRouter.get('/:id', carController_1.default.findCarToId);
carRouter.post('/', carController_1.default.addCar);
carRouter.put('/:id', carController_1.default.editNow);
carRouter.delete('/:id', carController_1.default.delCar);
exports.default = carRouter;
//# sourceMappingURL=carRouter.js.map