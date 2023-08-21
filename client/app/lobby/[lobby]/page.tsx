"use client"
import React,{ useEffect, useRef, useState } from "react";
import  './lobby.css'
import '../../components/comp.css'
import Canvas from "@/app/components/Canvas";
import Docs from "@/app/components/Docs";
import {io} from 'socket.io-client'
import { useParams } from "next/navigation";
const socket =io('http://localhost:3001')

const Lobby : React.FC = () => {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const midRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    const [clear,setClear] = useState(false);
    const [flag,setFlag] = useState(false);
    const {lobby} = useParams();
    const handleClick = ()=>{
        setClear(true);
    }
    useEffect(()=>{
        const lefEle = leftRef.current!;
        const rigEle = rightRef.current!;
        const lefStyle = window.getComputedStyle(lefEle);
        const rigStyle = window.getComputedStyle(rigEle);
        let lefWidth = lefStyle.width;
        let rigWidth = rigStyle.width;

        let x = 0;
        const mouseMoveResize = (event: { clientX: number; })=>{
            const dx = event.clientX - x;
            x = event.clientX;
            let lefWidthNum = parseFloat(lefWidth.replace("px",""));
            let rigWidthNum = parseFloat(rigWidth.replace("px",""));
            lefWidthNum = (lefWidthNum + dx)/lefEle!.parentElement!.clientWidth * 100;
            rigWidthNum = (rigWidthNum - dx)/rigEle!.parentElement!.clientWidth * 100;
            let val = `${lefWidthNum}%`;
            lefWidth = `${lefWidthNum/100 * lefEle!.parentElement!.clientWidth}%`;
            rigWidth = `${rigWidthNum/100 * rigEle!.parentElement!.clientWidth}%`;
            lefEle!.style.width = `${lefWidthNum}%`;
            rigEle!.style.width = `${rigWidthNum}%`;

            setFlag(!flag);
        }
        const mouseUpResize = (event: any)=>{
            document.removeEventListener('mousemove',mouseMoveResize)
        }
        const handleResize = (event: { clientX: number; })=>{
            x = event.clientX;
            document.addEventListener("mousemove", mouseMoveResize);
            document.addEventListener("mouseup", mouseUpResize);
        }

        const hanBtn = ()=>{
            setClear(false);
            socket.emit('clear_done',lobby);
        }

        const handleBtn = ()=>{
            setClear(true);
            socket.emit('clear',lobby);
            btn?.addEventListener('mouseup',hanBtn);
        }

        const midEle = midRef.current;
        if(midEle){
            midEle.addEventListener('mousedown',handleResize);
        }
        const btn = btnRef.current;
        if(btn){
            btn.addEventListener('mousedown',handleBtn);
        }

        return()=>{
            midEle?.removeEventListener("mousedown",handleResize);
            btn!.removeEventListener('mousedown',handleBtn);
        }

    },[])
    console.log(leftRef.current?.clientWidth,"abc");
    console.log(flag);
    return (
        <div className="outermost">
          <div ref={leftRef} className="board">
            <button ref={btnRef} className='clearButton' onClick={handleClick}>
                clear
            </button>
            <Canvas flag={flag} adn={leftRef} clear={clear}/>
          </div>
          <div ref={midRef} className="resizer">
                L
          </div>
          <div ref={rightRef} className="textArea">
            <Docs/>
          </div>
        </div>
    )
  }
  export default Lobby;