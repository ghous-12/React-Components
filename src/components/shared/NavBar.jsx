import { Bell, Plus } from "lucide-react";
import React from "react";
import { Button } from "../controls";
import SolcodersLogo from "../../assets/Solcoders-Logo.png";

const NavBar = () => {
  return (
    <div className="bg-white w-full flex justify-between px-5 py-2 items-center">
      <div>
        <img src={SolcodersLogo} alt="" className="h-10 " />
      </div>
      <div className="flex w-80 justify-between items-center ">
        <Button className="bg-red-700 hover:bg-red-800 text-sm h-7 items-center rounded-md ">
          <Plus size={19} /> Assign Member
        </Button>
        <Bell size={24} />
        <div>
          <p className="text-lg">
            <strong>Mr. Ali</strong>
          </p>
          <p className="text-xs font-bold text-gray-600">ADMIN</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-11 h-11 rounded-full"
        />
      </div>
    </div>
  );
};

export default NavBar;
