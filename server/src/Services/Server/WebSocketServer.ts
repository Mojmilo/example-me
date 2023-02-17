import { HttpServer } from "./HttpServer";

class WebSocketServer
{
    private static instance: WebSocketServer;
    private static io = HttpServer.getIo();

    private constructor() {}

    public static getInstance(): WebSocketServer
    {
        if (!WebSocketServer.instance)
        {
            WebSocketServer.instance = new WebSocketServer();
            WebSocketServer.instance.io();
        }

        return WebSocketServer.instance;
    }

    private io(): void
    {
        WebSocketServer.io.on('connection', (socket) => this.onConnect(socket));
    }

    private onConnect(socket): void
    {
        console.log('a user connected');
        socket.on('disconnect', () => this.onDisconnect());
        socket.on('data', (msg) => this.onData(msg));
    }

    private onDisconnect(): void
    {
        console.log('user disconnected');
    }

    private onData(msg): void
    {
        console.log('message:', msg);
    }
}

export { WebSocketServer }