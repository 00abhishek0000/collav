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
    socket.on('draw_line',({prevPoint,currentPoint,color} : DrawLine,lobby)=>{
        socket.broadcast.to(lobby).emit('draw_line',{prevPoint,currentPoint,color})
    })

    socket.on('clear',(lobby)=>io.to(lobby).emit('clear'));
    socket.on('clear_done',(lobby)=>io.to(lobby).emit('clear_done'));

    socket.on('newClient',(lobby)=>{
        socket.broadcast.to(lobby).emit('getCanvasState',lobby);
    })

    socket.on('canvasState',(state,lobby)=>{
        socket.broadcast.to(lobby).emit('canvStateFromServer',state);
    })
    socket.on('joinn',(lobby)=>{
        socket.join(lobby);
    })
    
    // docs code working fine just with glitch sometimes.
    socket.on('contentChange',(newContent,lobby)=>{
        console.log(lobby ,"change in content");
        socket.broadcast.to(lobby).emit('contentChange',newContent);
    })
    socket.on('newJoin',(lobby)=>{
         console.log('new person in lobby',lobby);
         socket.broadcast.to(lobby).emit('getDocState',lobby);
       
    })
    socket.on('DocState',(content,lobby)=>{
        console.log("asking for state",content);
        socket.broadcast.to(lobby).emit('DocStateFromServer',content);
    })

    socket.on('join',(lobby)=>{
        socket.join(lobby);
    })
   
})

server.listen(3001,()=>{
    console.log('server listening');
})




