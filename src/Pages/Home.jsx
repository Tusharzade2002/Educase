import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="flex items-center justify-center p-0  ">
      <div className=" bg-white h-[100%]  w-[420px] my-8 md:my-6 m-6 p-3 md:py-4 md:px-4 shadow-lg">
        <div className='h-[630px] sm:h-[300px]'>
           
       </div>
        <h1 className="text-start text-2xl font-bold">Welcome to PopX</h1>
        <p className="text-start text-sm my-1 me-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div>
            <Link to="/createaccount">
          <button className="w-full bg-purple-800 text-white text-lg font-bold my-2 py-1 rounded-lg">
            Create Account
          </button>
          </Link>
          <Link to="/signin">
          <button className="w-full bg-purple-300 font-bold my-2 py-1 mb-5 rounded-lg">
            Already Registered ? Login
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home