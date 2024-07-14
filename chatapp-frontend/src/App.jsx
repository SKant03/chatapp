import { Component, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='body_container  bg-purple-500 w-screen h-screen flex justify-center items-center'>
      <div className='login_container container max-w-2xl bg-white bg-opacity-50 backdrop-blur p-11 border-2 border-white rounded-xl shadow-xl '>
        <h1 className='text-center font-extrabold text-5xl'>Appli_name </h1>
        <form action="">
          <div className="forminternlcomp flex">
            <div className="qr_container w-1/2">Qr</div>
            <div className="detailinputcontainer w-1/2 flex flex-col">
              <h1 className='text-center font-bold text-3xl'>Login</h1>
              <label>
                <span className='sr-only'>Username</span>
                
              </label>
              <input type="password" placeholder='passsward' className='border' />
              <button>Login</button>
            </div>
          </div>
          <hr />
          <p>Not registered signup</p>
        </form>
      </div>

    </div>
    </>
  )
}

export default App
