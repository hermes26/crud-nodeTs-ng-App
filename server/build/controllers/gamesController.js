"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GamesController = /** @class */ (function () {
    function GamesController() {
    }
    GamesController.prototype.index = function (req, res) {
        res.send('games');
    };
    ;
    return GamesController;
}());
var gamesController = new GamesController();
exports.default = gamesController;
