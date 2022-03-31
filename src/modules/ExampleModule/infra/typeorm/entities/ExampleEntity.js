"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let ExampleEntity = class ExampleEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" })
], ExampleEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "curso" })
], ExampleEntity.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "name" })
], ExampleEntity.prototype, "nome", void 0);
ExampleEntity = __decorate([
    (0, typeorm_1.Entity)("tb_example")
], ExampleEntity);
exports.default = ExampleEntity;