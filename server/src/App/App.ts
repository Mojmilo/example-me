import { BaseController } from "../Services/Controller/BaseController";
import { UserController } from "../Services/Controller/UserController";
import { WebSocketServer } from "../Services/Server/WebSocketServer";
import { Query } from "../Db/Query";

Query.getInstance();
WebSocketServer.getInstance();
BaseController.getInstance();
UserController.getInstance();