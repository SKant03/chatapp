import { Component, useState } from 'react'
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="signin bg-blue-500" id="signin">
        <div className="max-w-lg min-w-96 p-5 rounded border border-white m-1 shadow-lg">
          <form className='m-6' id='formcom'>
            <div className='m-3 font-bold text-4xl mx-auto flex justify-center'>
              <span className='p-2 rounded-2xl'><h2>Login</h2></span>
            </div>
            <div className='m-3 grid'>
              <label className='font-bold text-2xl'>Email</label>
              <input type="email" className='rounded-md p-2' id='Entered_email' placeholder='email' />
            </div>
            <div className='m-3 grid'>
              <label className="font-bold text-2xl">Password</label>
              <input type="password" className="rounded-md p-2" id='Entered_passward' placeholder='password' />
            </div>
            <div className="m-3 flex justify-center">
              <input type="submit" className="bg-orange-400 p-2 rounded-full text-xl font-bold" id='submit_button' />
            </div>
          </form>

        </div>
      </div>
      
    </>
  )
}

export default App
