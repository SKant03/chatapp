import { Component, useState } from 'react'
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-neutral-800 text-white font-serif">



    <div className="text-center font-bold text-4xl pt-5">Broadcast Chat</div>

    <hr />

    <div className=" flex w-screen h-screen p-5">


      <div className="container basis-2/5 bg-neutral-700 rounded-2xl p-3">
        <div  className="flex justify-between">
          <div className="font-bold text-xl">Chats</div>
          <button><FontAwesomeIcon icon="fa-brands fa-rocketchat" style={{color: "#ffffff"}}/></button>
        </div>
        <div className="chatsaccounts">
          {/* the script generate the chat user */}
          <div className='conatiner px-4 py-4 flex justify-between'>
            <img src="" alt="userimage" />
            <div className="font-bold">NAME</div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className='conatiner px-4 py-4 flex '>
            <img src="" alt="userimage" />
            <div className="font-bold">NAME</div>
          </div>
          <div className="chat "></div>
          <div className="container fixed-bottom">chat</div>
      </div>
    </div>



    </div>
    </>
  )
}

export default App
