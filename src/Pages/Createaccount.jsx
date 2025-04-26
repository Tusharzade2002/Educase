import React from "react";

function Createaccount() {
  return (
    <div className="flex items-center justify-center p-0 relative">
      <div className="flex flex-col bg-gray-100 h-[90%] w-[300px] my-4 md:my-6 m-6 p-3 md:py-4 md:px-4 shadow-lg">
        <h1 className="text-2xl font-bold  ms-2 me-20 ">Create Your PopX account</h1>
        <div className="my-4">
          <div className="m-4 my-7 relative">
            <div className="flex absolute bottom-6  left-2 bg-gray-100  ">
                <div className="text-purple-700 text-sm">Full Name </div>
            </div>
            <div className="flex absolute bottom-6  left-[70px] bg-gray-100  ">
                <div className="text-red-700 ">*</div>
            </div>
            <input type="text" className=" w-full border text-black border-gray-400 bg-transparent rounded-sm py-1  px-2" placeholder="Marry Doe" />
          </div>

          <div className="m-4 my-7 relative">
            <div className="flex absolute bottom-6  left-2 bg-gray-100  ">
                <div className="text-purple-700 text-sm">Phone Number </div>
            </div>
            <div className="flex absolute bottom-6  left-[102px] bg-gray-100  ">
                <div className="text-red-700 ">*</div>
            </div>
            <input type="text" className=" w-full border text-black border-gray-400 bg-transparent rounded-sm py-1  px-2" placeholder="Marry Doe" />
          </div>

          <div className="m-4 my-1 relative">
            <div className="flex absolute bottom-6  left-2 bg-gray-100  ">
                <div className="text-purple-700 text-sm">Email Address</div>
            </div>
            <div className="flex absolute bottom-6  left-[95px] bg-gray-100  ">
                <div className="text-red-700 ">*</div>
            </div>
            <input type="text" className=" w-full border text-black border-gray-400 bg-transparent rounded-sm py-1  px-2" placeholder="Marry Doe" />
          </div>

          <div className="m-4 my-7 relative">
            <div className="flex absolute bottom-6  left-2 bg-gray-100  ">
                <div className="text-purple-700 text-sm">Password </div>
            </div>
            <div className="flex absolute bottom-6  left-[66px] bg-gray-100  ">
                <div className="text-red-700 ">*</div>
            </div>
            <input type="text" className=" w-full border text-black border-gray-400 bg-transparent rounded-sm py-1  px-2" placeholder="Marry Doe" />
          </div>

          <div className="m-4 my-7 relative">
            <div className="flex absolute bottom-6  left-2 bg-gray-100  ">
                <div className="text-purple-700 text-sm">Company Name</div>
            </div>
           
            <input type="text" className=" w-full border text-black border-gray-400 bg-transparent rounded-sm py-1  px-2" placeholder="Marry Doe" />
          </div>
      
          <p>Are you an Agency? </p>
          <p className="text-red-600 absolute bottom-0  left-0 ">*</p>
            <input type="radio" id="yes" 
            /> 
            <label for="yes">Yes</label>
            <input type="radio" id="yes" 
            className="ms-7"/>
            <label for="yes" >No</label>
        </div>
        <div>
            <button className="w-full text-white py-1 rounded-md bg-purple-700">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Createaccount;
