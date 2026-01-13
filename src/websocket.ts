import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import express, { Application } from 'express';
import { createServer } from 'http';


type ApplicationServer = {
    createWebSocketServer: (httpServer: HttpServer) => Server;
    createExpressServer: () => Application;
    createNodeServer: () => HttpServer;
}

export const serverFactory = {
    createWebSocketServer(httpServer: HttpServer): Server {
        const socket = new Server(httpServer, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        });
        return socket;
    },
    createNodeServer(app: Application): HttpServer {
        const nodeServer = createServer(app);
        return nodeServer;
    },
    createExpressServer(): Application {
        const app = express();
        return app;
    }
};


export function bootstrap(): ApplicationServer {
    const app = serverFactory.createExpressServer();
    const httpServer = serverFactory.createNodeServer(app);
    const socketServer = serverFactory.createWebSocketServer(httpServer);

    return {
        createExpressServer: () => app,
        createWebSocketServer: () => socketServer,
        createNodeServer: () => httpServer,
    }
}




