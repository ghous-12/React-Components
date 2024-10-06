import React from "react";
import { Button } from "../controls";
import { ArrowRight, Calendar, Folder, Home } from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-full bg-red-700 w-20">
      <div className="flex flex-col gap-y-4 pt-8">
        <Button className="flex flex-col hover:bg-red-800 rounded-none py-3  text-xs font-bold">
          <Link to="/" className="flex flex-col items-center">
            <Home /> Home
          </Link>
        </Button>
        <Button className="flex flex-col hover:bg-red-800 rounded-none py-3  text-xs font-bold">
          <Link to="/attendance" className="flex flex-col items-center">
            <Calendar /> Attendance
          </Link>
        </Button>
        <Button className="flex flex-col hover:bg-red-800 rounded-none py-3  text-xs font-bold">
          <Link to="/leave" className="flex flex-col items-center">
            <Folder /> Leave
          </Link>
        </Button>
        <Button className="flex flex-col hover:bg-red-800 rounded-none py-3  text-xs font-bold">
          <Link to="/timesheet" className="flex flex-col items-center">
            <Calendar /> Time Sheet
          </Link>
        </Button>
        <Button className="flex flex-col hover:bg-red-800 rounded-none py-3  text-xs font-bold">
          <Link to="/others" className="flex flex-col items-center">
            <ArrowRight /> Others
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
