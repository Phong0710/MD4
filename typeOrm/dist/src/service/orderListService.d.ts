declare class OrderListService {
    private orderListRepository;
    private orderDetailRepository;
    constructor();
    getStatus: (IdUser: any) => Promise<void>;
    getCartToUser: (userId: any) => Promise<any>;
    addToCart: (idUser: any, idProduct: any) => Promise<void>;
}
declare const _default: OrderListService;
export default _default;
