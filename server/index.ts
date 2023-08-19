import express from 'express';
import http from 'http'
import {Server} from 'socket.io'
 
const app = express();
const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:'*',
    },
});

type Point = {
    x: number,
    y:number,
}
type DrawLine = {
    prevPoint : Point | null,
    currentPoint : Point,
    color : string,
}
io.on('connection',(socket)=>{
    socket.on('draw_line',({prevPoint,currentPoint,color} : DrawLine)=>{
        socket.broadcast.emit('draw_line',{prevPoint,currentPoint,color})
    })

    socket.on('clear',()=>io.emit('clear'));
    socket.on('clear_done',()=>io.emit('clear_done'));

    socket.on('newClient',()=>{
        socket.broadcast.emit('getCanvasState');
    })

    socket.on('canvasState',(state)=>{
        socket.broadcast.emit('canvStateFromServer',state);
    })

    socket.on('contentChange',(newContent)=>{
        socket.broadcast.emit('contentChange',newContent);
    })

    socket.on('newJoin',()=>{
        socket.broadcast.emit('getDocState');
    })
    socket.on('DocState',(content)=>{
        socket.broadcast.emit('DocStateFromServer',content);
    })
})

server.listen(3001,()=>{
    console.log('server listening');
})




