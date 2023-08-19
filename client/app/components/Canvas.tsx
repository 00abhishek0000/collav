"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useDraw } from '../hooks/useDraw';
import {io} from 'socket.io-client';
import { drawLine } from '../functions/drawLine';

const socket = io('http://localhost:3001')

interface CanvasProps{
  clear : boolean,
  adn : React.RefObject<HTMLDivElement>,
  flag: boolean
}
type DrawLineProps = {
  color : string,
  prevPoint : Point | null,
  currentPoint: Point,
}

const Canvas : React.FC<CanvasProps> = ({clear,adn,flag}) => {
  const [color,setColor] = useState<string>('#000');
  const {canvasRef,onMouseDown} = useDraw(createLine);
  const [fullClear,setFullClear] = useState<boolean>(false);
  const [canvasWidth,setCanvasWidth] = useState(750);
  
  useEffect(()=>{
      socket.on('clear',allclear);
      socket.on('clear_done',clearDone);
      if(clear || fullClear){
        canvasRef!.current!.getContext('2d')!.clearRect(0,0,canvasRef.current!.width,canvasRef.current!.height);
      }
      return()=>{
        socket.off('clear')
      }
  },[clear,fullClear])
  
  useEffect(()=>{
    setCanvasWidth(adn.current!.clientWidth*95/100);
  },[adn.current?.clientWidth])
  console.log(canvasWidth,"huhuhh");

  // const canvasWidth = adn.current ? adn.current!.clientWidth*95/100 : 750;
  const canvasHeight = 770;



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
      setFullClear(true);
  }
  function clearDone(){
    setFullClear(false);
  }

  function createLine({prevPoint,currentPoint,ctx} : Draw){
    socket.emit('draw_line',({prevPoint,currentPoint,color}))
    drawLine({prevPoint,currentPoint,ctx,color})
  }

  // let canvasWidth = 750;
  // if(adn.current) canvasWidth =  adn.current.clientWidth*95/100;
  // let canvasHeight = 770;
  // if(adn.current) canvasHeight =  adn.current.clientHeight*95/100;
 
  return (
    <>
      <canvas onMouseDown={onMouseDown}  ref={canvasRef} width={canvasWidth} height={canvasHeight}  className='canvas'>
      </canvas>
    </>
  )
}

export default Canvas