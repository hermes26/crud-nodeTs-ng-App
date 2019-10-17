"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var GamesController = /** @class */ (function () {
    function GamesController() {
    }
    GamesController.prototype.index = function (req, res) {
        database_1.default.query('DESCRIBE games');
        res.send('hllo games');
    };
    ;
    return GamesController;
}());
var gamesController = new GamesController();
exports.default = gamesController;
