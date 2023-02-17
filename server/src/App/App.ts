import { HttpServer } from "../Services/Server/HttpServer";
import {BaseController} from "../Services/Controller/BaseController";
import {UserController} from "../Services/Controller/UserController";
import {WebSocketServer} from "../Services/Server/WebSocketServer";

HttpServer.getInstance();
WebSocketServer.getInstance();
BaseController.getInstance();
UserController.getInstance();