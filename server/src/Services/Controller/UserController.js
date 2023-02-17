"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var HttpServer_1 = require("../Server/HttpServer");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.getInstance = function () {
        if (!UserController.instance) {
            UserController.instance = new UserController();
            UserController.app.get('/users', function (req, res) { return UserController.index(req, res); });
            UserController.app.get('/users/:id', function (req, res) { return UserController.getUser(req, res); });
            UserController.app.post('/users', function (req, res) { return UserController.addUser(req, res); });
            UserController.app.put('/users/:id', function (req, res) { return UserController.updateUser(req, res); });
            UserController.app.delete('/users/:id', function (req, res) { return UserController.deleteUser(req, res); });
        }
        return UserController.instance;
    };
    UserController.index = function (req, res) {
        res.send('User page');
    };
    UserController.getUser = function (req, res) {
        res.send('User page : get user');
    };
    UserController.addUser = function (req, res) {
        res.send('User page : add user');
    };
    UserController.updateUser = function (req, res) {
        res.send('User page : update user');
    };
    UserController.deleteUser = function (req, res) {
        res.send('User page : delete user');
    };
    UserController.app = HttpServer_1.HttpServer.getInstance().getApp();
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map