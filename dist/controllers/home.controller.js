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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const types_core_1 = require("../core/types.core");
const logger_service_1 = require("../services/logger.service");
let HomeController = class HomeController {
    constructor(logger) {
        this.logger = logger;
    }
    index(req, res) {
        this.logger.log('INFO', 'Get Home.index');
        return res.send('Hello World');
    }
};
__decorate([
    inversify_express_utils_1.httpGet(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "index", null);
HomeController = __decorate([
    inversify_express_utils_1.controller('/'),
    __param(0, inversify_1.inject(types_core_1.TYPES.Logger)),
    __metadata("design:paramtypes", [logger_service_1.Logger])
], HomeController);
exports.HomeController = HomeController;
