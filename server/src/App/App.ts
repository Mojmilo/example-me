import { HttpServer } from "../Services/Server/HttpServer";
import {BaseController} from "../Services/Controller/BaseController";
import {UserController} from "../Services/Controller/UserController";

HttpServer.getInstance();
BaseController.getInstance();
UserController.getInstance();