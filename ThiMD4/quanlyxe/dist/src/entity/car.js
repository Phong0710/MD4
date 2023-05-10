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
exports.Car = void 0;
const typeorm_1 = require("typeorm");
const brand_1 = require("./brand");
let Car = class Car {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Car.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Car.prototype, "nameCar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Car.prototype, "priceCar", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_1.Brand, (brand) => brand.cars),
    __metadata("design:type", brand_1.Brand)
], Car.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Car.prototype, "description", void 0);
Car = __decorate([
    (0, typeorm_1.Entity)()
], Car);
exports.Car = Car;
//# sourceMappingURL=car.js.map