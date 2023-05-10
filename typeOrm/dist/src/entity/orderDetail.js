"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetail = void 0;
const typeorm_1 = require("typeorm");
const orderList_1 = require("./orderList");
const products_1 = require("./products");
let OrderDetail = class OrderDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => orderList_1.OrderList, (orderList) => orderList.orderDetail),
    __metadata("design:type", orderList_1.OrderList)
], OrderDetail.prototype, "orderList", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => products_1.Product, (product) => product.orderDetail),
    __metadata("design:type", products_1.Product)
], OrderDetail.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "priceCurrent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderDetail.prototype, "quantity", void 0);
OrderDetail = __decorate([
    (0, typeorm_1.Entity)()
], OrderDetail);
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=orderDetail.js.map