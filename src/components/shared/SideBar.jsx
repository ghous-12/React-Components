import React from "react";
import { Button } from "../controls";
import { ArrowRight, Calendar, Folder, Home } from "lucide-react";

const SideBar = () => {
  return (
    <div className="h-full bg-red-700 w-20">
      <div className="flex flex-col gap-y-4 pt-8">
        <Button className="flex flex-col hover:bg-red-800 rounded-none py-3  text-xs font-bold">
          <Home /> Home
        </Button>
        <Button className="flex flex-col hover:bg-red-800 rounded-none py-3  text-xs font-bold">
          <Calendar /> Attendance
        </Button>
        <Button className="flex flex-col hover:bg-red-800 rounded-none py-3  text-xs font-bold">
          <Folder /> Leave
        </Button>
        <Button className="flex flex-col hover:bg-red-800 rounded-none py-3  text-xs font-bold">
          <Calendar /> Time Sheet
        </Button>
        <Button className="flex flex-col hover:bg-red-800 rounded-none py-3  text-xs font-bold">
          <ArrowRight /> Others
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
