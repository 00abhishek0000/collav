"use client"
import React, { useEffect, useRef } from 'react'
import { useDraw } from '../hooks/useDraw';

interface CanvasProps{
  clear : boolean,
}

const Canvas : React.FC<CanvasProps> = ({clear}) => {

  const {canvasRef,onMouseDown} = useDraw(drawLine);

  useEffect(()=>{
      if(clear){
        canvasRef!.current!.getContext('2d')!.clearRect(0,0,canvasRef.current!.width,canvasRef.current!.height);
      }
  },[clear])
  

  function drawLine({prevPoint,currentPoint,ctx}:Draw){
    const {x:currX,y:currY} = currentPoint;
    const color = '#000'
    const lineWidth = 3;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth= lineWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(startPoint.x,startPoint.y);
    ctx.lineTo(currX,currY);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(startPoint.x,startPoint.y,2,0,2*Math.PI);
    ctx.fill();

  }

  return (
    <>
      <canvas onMouseDown={onMouseDown} ref={canvasRef} className='canvas'>
      </canvas>
    </>
  )
}

export default Canvas