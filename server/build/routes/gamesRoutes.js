"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var GamesRoutes = /** @class */ (function () {
    function GamesRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    GamesRoutes.prototype.config = function () {
        this.router.get('/', function (req, res) {
            res.send('Games');
        });
    };
    return GamesRoutes;
}());
var gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
