import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import io from 'socket.io-client'
const socket = io('http://localhost:3001');


import React, { useEffect, useState } from 'react'

const Docs = () => {
    const [content,setContent] = useState('');

    const quillstyles = {
        height : '800px',
        width : '800px',
        backgroundColor : 'white', 
        color : '#004',
    }
    useEffect(()=>{
      socket.emit('newJoin')
      socket.on('contentChange',(newContent)=>{
        setContent(newContent);
      });

      socket.on('getDocState',()=>{
        socket.emit('DocState',content);
      });

      socket.on('DocStateFromServer',(wow)=>{
        setContent(wow);
      });

      return()=>{
        socket.off('contentChange');
        socket.off('getDocState');
        socket.off('DocStateFromServer');
      }

    },[content])
    const handleContentChange = (newContent : any)=>{
      setContent(newContent);
      socket.emit('contentChange',newContent);
    }

  return (
        <ReactQuill value={content} style={quillstyles} onChange={handleContentChange} theme="snow"/>
  )
}

export default Docs