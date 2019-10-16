"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    IndexRoutes.prototype.config = function () {
        this.router.get('/', function (req, res) {
            res.send('Hello world');
        });
    };
    return IndexRoutes;
}());
var indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
