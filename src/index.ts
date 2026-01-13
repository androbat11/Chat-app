import { Application, Request, Response } from "express";
import { tryCatch } from "./common/tryCatch";
import { bootstrap } from "./websocket";

function buildApplicationRouters<T>(routers: Record<string, T>){

}

(function initApplicationServer(port: number) {
    const { createExpressServer, createNodeServer, createWebSocketServer } = bootstrap();

    tryCatch(() => {
        const app = createExpressServer();

        app.get('/', (req: Request, res: Response) => { 
            res.send('Hello World') 
        });
        const httpServer = createNodeServer();  

        createWebSocketServer(httpServer); 

        listenHttpServer(httpServer, port); 
    }, (error) => {
        console.error(error);
    })

})(3000);

function listenHttpServer(httpServer: any, port: number) {
    return httpServer.listen(port, () => { 
        console.log(`Server running on port ${port}`);
        console.log(`WebSocket server ready for connections`);
    });
}




