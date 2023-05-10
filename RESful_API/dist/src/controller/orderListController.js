"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderListService_1 = __importDefault(require("../service/orderListService"));
const data_source_1 = require("../data-source");
const orderList_1 = require("../entity/orderList");
class OrderListController {
    constructor() {
        this.updateStatusAndShowFromBuy = async (req, res) => {
            let IdUser = req.session['user'].id;
            console.log(IdUser, 'idUser');
            console.log(await data_source_1.AppDataSource.createQueryBuilder()
                .update(orderList_1.OrderList)
                .set({ statusOrder: true })
                .where("userId = :id", { id: IdUser })
                .andWhere("statusOrder = 0")
                .execute());
            res.render('user/buyNow');
        };
        this.showFromCart = async (req, res) => {
            let IdUser = req.session['user'].id;
            let priceCost = 0;
            let productDetail = await this.orderListService.getCartToUser(IdUser);
            productDetail.forEach(item => {
                priceCost += (item.price * 80 / 100);
            });
            res.status(210).json({
                products: productDetail, priceCost: priceCost,
                message: 'OK'
            });
        };
        this.addCartToUser = async (req, res) => {
            if (req.session['user']) {
                let IdUser = req.session['user'].id;
                let { IdProduct } = req.body;
                await orderListService_1.default.addToCart(IdUser, IdProduct);
            }
            else {
                res.json({
                    message: "user chua dang nhap"
                });
            }
        };
        this.orderListService = orderListService_1.default;
    }
}
exports.default = new OrderListController;
//# sourceMappingURL=orderListController.js.map