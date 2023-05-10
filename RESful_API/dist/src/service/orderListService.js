"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const orderList_1 = require("../entity/orderList");
const orderDetail_1 = require("../entity/orderDetail");
const products_1 = require("../entity/products");
class OrderListService {
    constructor() {
        this.getStatus = async (IdUser) => {
            let user = await this.orderListRepository.findOneBy({ user: IdUser });
            if (user) {
                user.statusOrder = 1;
                await this.orderListRepository.update(user);
            }
        };
        this.getCartToUser = async (userId) => {
            const sqlQuery = `SELECT *
                          FROM order_detail od
                                   JOIN order_list ol ON ol.orderId = od.orderListOrderId
                                   JOIN product p ON p.id = od.productId
                          WHERE  ol.userId = ? and ol.statusOrder = 0`;
            const productList = await this.orderDetailRepository.query(sqlQuery, [userId]);
            return productList;
        };
        this.addToCart = async (idUser, idProduct) => {
            let currentCart = await data_source_1.AppDataSource.createQueryBuilder()
                .select("orderList")
                .from(orderList_1.OrderList, "orderList")
                .where("userId = :id", { id: idUser })
                .andWhere("statusOrder = 0")
                .orderBy("orderList.orderId", "DESC")
                .getOne();
            console.log(currentCart);
            if (!currentCart) {
                currentCart = await this.orderListRepository.save({
                    user: idUser
                });
            }
            let product = await data_source_1.AppDataSource.createQueryBuilder()
                .select("product")
                .from(products_1.Product, "product")
                .where("id = :id", { id: idProduct })
                .getOne();
            let quantity = 1;
            let currentPrice = product.price;
            await this.orderDetailRepository.save({
                orderList: currentCart,
                quantity: quantity,
                priceCurrent: currentPrice,
                product: product
            });
        };
        this.orderListRepository = data_source_1.AppDataSource.getRepository(orderList_1.OrderList);
        this.orderDetailRepository = data_source_1.AppDataSource.getRepository(orderDetail_1.OrderDetail);
    }
}
exports.default = new OrderListService();
//# sourceMappingURL=orderListService.js.map