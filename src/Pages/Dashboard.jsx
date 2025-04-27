import React from "react";
import image from "../assets/Ellipse 114.png";
import logo from '../assets/Group 1585.svg'
function Dashboard() {
  return (
    <div className="flex items-center justify-center p-0  ">
      <div className="flex flex-col bg-gray-100 h-[90%] w-[420px]  m-10    shadow-lg">
        <div className="w-full h-9 bg-white px-9 py-13 ">
          <h1 className="text-xl">Account Setting</h1>
        </div>
        <div className="flex w-full bg-gray-100 p-5 relative border-r-cyan-100">
          <img src={image} alt="...image" />
          <img className="absolute bottom-5 left-20" src={logo}/>
          <div className="ms-6 font-bold">
            <p>Marry Doe</p>
            <p>marry@gmail.com</p>
          </div>
        </div>
        <div className="p-3 border-b-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum facilis sint eos deleniti qu
        </div>
        <div className="h-[530px] md:h-[260px]">

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
