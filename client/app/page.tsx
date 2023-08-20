'use client'
import Link from 'next/link'
import './mainPage.css'
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const val = uuidv4();
  const [roomId, setRoomId] = useState(`${val}`);
  
  const handleClick = ()=> {
    if(roomId.trim()===''){
      alert('Please enter a valid room id')
      return;
    }
    router.push(`/lobby/${roomId.trim()}`);
  }

  return (
    <>
      <div className='outerDiv'>
        <div className='innerDiv'>
          <p className='heading'>COLLAV</p>
          <div className='huh'>
           <input className='textbox'
            type="text"
            placeholder="Enter Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            />
            <button onClick={handleClick} className='createRoom'>
              Create a room
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
