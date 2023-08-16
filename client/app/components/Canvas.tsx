"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useDraw } from '../hooks/useDraw';
import {io} from 'socket.io-client';
import { drawLine } from '../functions/drawLine';

const socket = io('http://localhost:3001')

interface CanvasProps{
  clear : boolean,
}
type DrawLineProps = {
  color : string,
  prevPoint : Point | null,
  currentPoint: Point,
}

const Canvas : React.FC<CanvasProps> = ({clear}) => {
  const [color,setColor] = useState<string>('#000');
  const {canvasRef,onMouseDown} = useDraw(createLine);

  useEffect(()=>{
      socket.on('clear',allclear);
      if(clear){
        canvasRef!.current!.getContext('2d')!.clearRect(0,0,canvasRef.current!.width,canvasRef.current!.height);
      }
      return()=>{
        socket.off('clear')
      }
  },[clear])

  useEffect(()=>{
    const ctx =  canvasRef.current?.getContext('2d');
    socket.emit('newClient');
    socket.on('getCanvasState',()=>{
      if(!canvasRef.current?.toDataURL()) return;
      socket.emit('canvasState',canvasRef.current?.toDataURL());
    })
    socket.on('draw_line',({prevPoint,currentPoint,color}:DrawLineProps)=>{
        if(!ctx) return;
        drawLine({prevPoint,currentPoint,ctx,color});
    })
    socket.on('canvStateFromServer',(state:string)=>{
        const img = new Image;
        img.src = state;
        img.onload = ()=>{
          ctx?.drawImage(img,0,0);
        }
    })

    return()=>{
      socket.off('draw_line')
      socket.off('canvStateFromServer')
      socket.off('getCanvasState')
    }

  },[canvasRef])
  
  function allclear(){
      clear = true;
  }

  function createLine({prevPoint,currentPoint,ctx} : Draw){
    socket.emit('draw_line',({prevPoint,currentPoint,color}))
    drawLine({prevPoint,currentPoint,ctx,color})
  }

  return (
    <>
      <canvas onMouseDown={onMouseDown} ref={canvasRef} className='canvas'>
      </canvas>
    </>
  )
}

export default Canvas