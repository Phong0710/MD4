"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandController = void 0;
const brandService_1 = __importDefault(require("../service/brandService"));
class brandController {
    constructor() {
        this.findAllBrand = async (req, res) => {
            let id = parseInt(req.params.id);
            console.log(id);
            let listCarsOfBrand = await this.brandService.getAllBrand(id);
            res.status(200).json(listCarsOfBrand);
        };
        this.brandService = brandService_1.default;
    }
}
exports.brandController = brandController;
exports.default = new brandController();
//# sourceMappingURL=brandController.js.map