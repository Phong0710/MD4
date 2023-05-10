import {Request, Response} from "express";
import orderListService from "../service/orderListService";
import {AppDataSource} from "../data-source";
import {OrderList} from "../entity/orderList";



class OrderListController {
    private orderListService;

    constructor() {
        this.orderListService = orderListService;
    }
    updateStatusAndShowFromBuy = async (req: Request, res: Response) => {
        let IdUser = req.session['user'].id
        console.log(IdUser,'idUser');

        console.log(await AppDataSource.createQueryBuilder()
            .update(OrderList)
            .set({ statusOrder: true })
            .where("userId = :id", { id: IdUser })
            .andWhere("statusOrder = 0")
            .execute())
        res.render('user/buyNow')
    }
    showFromCart = async (req: Request, res: Response) => {
        let IdUser = req.session['user'].id
        let priceCost=0
        let productDetail = await this.orderListService.getCartToUser(IdUser);

        productDetail.forEach(item=>{
            priceCost+= (item.price*80/100)
        })
        res.render('user/cart',{products:productDetail,priceCost:priceCost})
    }

    addCartToUser = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let IdUser = req.session['user'].id
            let {IdProduct} = req.body
            await orderListService.addToCart(IdUser, IdProduct)
        } else {
            res.json({
                message: "user chua dang nhap"
            })
        }

    }

}


export default new OrderListController;