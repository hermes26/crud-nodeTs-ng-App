"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        res.send('Hello world');
    };
    ;
    return IndexController;
}());
exports.indexController = new IndexController();
