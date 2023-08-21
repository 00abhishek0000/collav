'use client'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import io from 'socket.io-client'
const socket = io('http://localhost:3001');


import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";

const Docs = () => {
    const [content,setContent] = useState('');
    const {lobby} = useParams();
    console.log(lobby,"id");

    const quillstyles = {
        height : '800px',
        width : '800px',
        backgroundColor : 'white', 
        color : '#004',
    }
    useEffect(()=>{
      socket.emit('join',lobby);
      socket.emit('newJoin',lobby);
      socket.on('contentChange',(newContent)=>{
        setContent(newContent);
      });

      socket.on('getDocState',(lobby)=>{
        socket.emit('DocState',content,lobby);
      });

      socket.on('DocStateFromServer',(content)=>{
        setContent(content);
      });

      return()=>{
        socket.off('contentChange');
        socket.off('getDocState');
        socket.off('DocStateFromServer');
      }

    },[content,lobby])
    const handleContentChange = (newContent : string)=>{
      setContent(newContent);
      socket.emit('contentChange',newContent,lobby);
    }

  return (
        <ReactQuill value={content} style={quillstyles} onChange={handleContentChange} theme="snow"/>
  )
}

export default Docs