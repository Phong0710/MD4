import {AppDataSource} from "../data-source";
import {OrderList} from "../entity/orderList";
import {OrderDetail} from "../entity/orderDetail";
import productService from "./productService";
import {Product} from "../entity/products";


class OrderListService {
    private orderListRepository
    private orderDetailRepository

    constructor() {
        this.orderListRepository = AppDataSource.getRepository(OrderList)
        this.orderDetailRepository = AppDataSource.getRepository(OrderDetail)
    }
    getStatus = async (IdUser) => {
        let user = await this.orderListRepository.findOneBy({ user: IdUser })
        if (user) {
            user.statusOrder = 1
            await this.orderListRepository.update(user)
        }
    }
    getCartToUser = async (userId) => {
        const sqlQuery = `SELECT *
                          FROM order_detail od
                                   JOIN order_list ol ON ol.orderId = od.orderListOrderId
                                   JOIN product p ON p.id = od.productId
                          WHERE  ol.userId = ? and ol.statusOrder = 0`;
        const productList = await this.orderDetailRepository.query(sqlQuery, [userId]);
        return productList;
    }
    addToCart = async (idUser, idProduct) => {
        let currentCart = await AppDataSource.createQueryBuilder()
            .select("orderList")
            .from(OrderList, "orderList")
            .where("userId = :id", {id: idUser})
            .andWhere("statusOrder = 0")
            .orderBy("orderList.orderId", "DESC")
            .getOne();
        console.log(currentCart);
        if (!currentCart) {
            currentCart = await this.orderListRepository.save({
                user: idUser
            })
        }

        // let cartID = currentCart.orderId;
        let product = await AppDataSource.createQueryBuilder()
            .select("product")
            .from(Product, "product")
            .where("id = :id", {id: idProduct})
            .getOne()
        let quantity = 1;
        let currentPrice = product.price;
        await this.orderDetailRepository.save(
            {
                orderList: currentCart,
                quantity: quantity,
                priceCurrent: currentPrice,
                product: product
            })
    }

}

export default new OrderListService()