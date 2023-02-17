"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var HttpServer_1 = require("../Server/HttpServer");
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.getInstance = function () {
        if (!BaseController.instance) {
            BaseController.instance = new BaseController();
            BaseController.app.get('/', function (req, res) { return BaseController.index(req, res); });
        }
        return BaseController.instance;
    };
    BaseController.index = function (req, res) {
        res.send('Base page');
    };
    BaseController.app = HttpServer_1.HttpServer.getInstance().getApp();
    return BaseController;
}());
exports.BaseController = BaseController;
//# sourceMappingURL=BaseController.js.map