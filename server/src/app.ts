//Import Express
import express from "express";
//Import router
import { router } from "./router";
//Import lib to  fundamental security mechanism 
// implemented by web browsers to prevent unauthorized 
// access to resources on a web page from different origin
import cors from 'cors'

//Create module and class App to create and initialize 
// a express Application
export class App {
    public app: express.Application;

    //Initialize server, middleware and router.
    constructor() {
        this.app = express();
        this.middleware();
        this.router();
    }

    private middleware() {
        this.app.use(cors())
        this.app.use(express.json());
    }

    private router() {
        this.app.use(router);
    }
}

//const express = require('express');
/*
import express from 'express'
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.post('/submit-form', (req, res) => {
    res.send('Form Submitted')
})

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next()
})

const port = 3230

app.listen(port, () => {
    console.log(`Server Listen on port ${port}`)
})
    */
/*
const io = new Server(server, {
    cors: {
        origin: env.clientURL(),
        // credentials: true
    }
});

type SocketType = Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, Record<string, never>>;

const customRooms = ['Room A', 'Room B', 'Room C'];

const handleDisconnect = (socket: SocketType) => () => {
    console.log('A user disconnected', socket.id, 'io.of("/").sockets.size:', io.of("/").sockets.size);
    try {
        io.emit("receive_oline_people_count", io.of("/").socket.size);
    } catch (erro) {
        console.error(error);
    }
}
*/