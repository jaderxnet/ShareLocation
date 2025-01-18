//Import app from app.ts
import { permission } from "process";
import { App } from "./app"
//Import socket classes to enable real time 
//communication between client and server
import { Socket, Server } from 'socket.io'

//Create a new instance of app
const app = new App();
//Use de instance to define a log to the start server
const server = app.app.listen(3000, () => {
    console.log(`Server is running`)
})

// Define the free security cors to tests
const io: Server = new Server(server, {
    cors: {
        origin: '*',
    },
})

//When socket have a connection, log de socket id
io.on('connection', (socket, Socket) => {
    console.log(`User Connection: ${socket.id}`)
})

//Defines a custom interface extends of Socket Interface
interface CustomSocket extends Socket {
    roomId?: string
}

//Define a room creator transform roomId in SocketId
const roomCreator = new Map<string, string>()
//when the socket receive a connection request
io.on('connection', (socket: CustomSocket) => {
    //Log socket id
    console.log(`User connected: ${socket.id}`)

    socket.on('createRoom', (data) => {
        const roomId = Math.random().toString(36).substring(2, 7)
        socket.join(roomId)
        socket.roomId = roomId
        const totalRoomUsers = io.sockets.adapter.rooms.get(roomId)
        socket.emit('roomCreated', {
            roomId,
            permission: data.position,
            totalConnectedUsers: Array.from(totalRoomUsers || []),
        })
        //Map with the socket.id by roomId
        roomCreator.set(roomId, socket.id)
    })
})