import * as express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

class HttpServer
{
    private static instance: HttpServer;
    private static app = express();
    private static httpServer = createServer(HttpServer.app);
    private static io = new Server(HttpServer.httpServer, {
        cors: {
            origin: '*'
        }
    });

    private constructor() {}

    public static getInstance(): HttpServer
    {
        if (!HttpServer.instance)
        {
            HttpServer.instance = new HttpServer();
            HttpServer.httpServer.listen(3000, () => console.log('Server is running on port 3000'));
        }

        return HttpServer.instance;
    }

    public getApp(): express.Application
    {
        return HttpServer.app;
    }
}

export { HttpServer }