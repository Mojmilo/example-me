"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpServer = void 0;
var express = require("express");
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var HttpServer = /** @class */ (function () {
    function HttpServer() {
    }
    HttpServer.getInstance = function () {
        if (!HttpServer.instance) {
            HttpServer.instance = new HttpServer();
            HttpServer.httpServer.listen(3000, function () { return console.log('Server is running on port 3000'); });
        }
        return HttpServer.instance;
    };
    HttpServer.prototype.getApp = function () {
        return HttpServer.app;
    };
    HttpServer.app = express();
    HttpServer.httpServer = (0, http_1.createServer)(HttpServer.app);
    HttpServer.io = new socket_io_1.Server(HttpServer.httpServer, {
        cors: {
            origin: '*'
        }
    });
    return HttpServer;
}());
exports.HttpServer = HttpServer;
//# sourceMappingURL=HttpServer.js.map