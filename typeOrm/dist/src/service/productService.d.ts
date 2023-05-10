declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<void>;
    findById: (id: any) => Promise<any>;
    updateProduct: (id: any, updateNow: any) => Promise<void>;
    delProductById: (id: any) => Promise<void>;
    searchShoes: (name: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
