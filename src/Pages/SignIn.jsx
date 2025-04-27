import React from 'react'
import { Link } from 'react-router-dom'
function SignIn() {
  return (
    <div className="flex items-center justify-center p-0  ">
      <div className="  bg-gray-100 h-[90%] w-[420px] my-4 md:my-6 m-6 p-3 md:py-4 md:px-4 shadow-lg">
      
        <h1 className='text-2xl'>SignIn To Your PopX Account</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className="m-4 my-7 relative">
            <div className="flex absolute bottom-6  left-2 bg-gray-100  ">
                <div className="text-purple-700 text-sm">Full Name </div>
            </div>
            
            <input type="text" className=" w-full border text-black border-gray-400 bg-transparent rounded-sm py-1  px-2" placeholder="Marry Doe" />
          </div>
          <div className="m-4 my-7 relative">
            <div className="flex absolute bottom-6  left-2 bg-gray-100  ">
                <div className="text-purple-700 text-sm">Full Name </div>
            </div>
            
            <input type="text" className=" w-full border text-black border-gray-400 bg-transparent rounded-sm py-1  px-2" placeholder="Marry Doe" />
          </div>
          <Link to="/dashboard">
          <button className="w-full bg-purple-800 text-white text-lg font-bold my-1 py-1 rounded-lg">
            Login
          </button>
          </Link>
          <div className='h-[540px] md:h-[179px]'>

          </div>
      </div>
    </div>
    
  )
}

export default SignIn