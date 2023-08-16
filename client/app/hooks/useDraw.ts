import { useEffect, useRef, useState } from "react";
import {io} from 'socket.io-client'
const socket =io('http://localhost:3001')

export const useDraw = ( onDraw : ({ctx,currentPoint,prevPoint} : Draw) => void)=>{
    const [mouseDown,setMouseDown] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prevPoint = useRef<null|Point>(null);

    const onMouseDown = ()=>{setMouseDown(true);};
    useEffect(()=>{
        const handler = (e:MouseEvent)=>{
            if(!mouseDown) return;
            const bound = canvasRef.current!.getBoundingClientRect();
            console.log(bound!.left);
            console.log(bound!.top);
            console.log(e.clientX);
            const x_cor = e.clientX - bound.left;
            const y_cor = e.clientY - bound.top;
            console.log({x_cor,y_cor});
            const currentPoint : Point = {x : x_cor,y : y_cor}
            console.log(currentPoint);

            const ctx = canvasRef.current?.getContext('2d');
            if(!ctx || !currentPoint) return;
            onDraw({ctx,currentPoint,prevPoint:prevPoint.current});
            prevPoint.current = currentPoint;
        }
        const mouseUpHandler = ()=>{
            setMouseDown(false);
            prevPoint.current = null;
        }
        canvasRef.current?.addEventListener('mousemove',handler);
        window.addEventListener('mouseup',mouseUpHandler);
        return ()=> {
            canvasRef.current?.removeEventListener('mousemove',handler);
            window.removeEventListener('mouseup',handler);
        }
    },[onDraw])
    return {canvasRef,onMouseDown};
}