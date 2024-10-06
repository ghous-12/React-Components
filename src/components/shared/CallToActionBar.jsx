import React from "react";
import { Check, Clock } from "lucide-react";

import { Button } from "../controls";

const CallToActionBar = () => {
  return (
    <div className="bg-white w-full flex justify-between pl-3 py-2 items-center border-t-2 border-[rgb(224,223,224)]">
      <div>
        <Button className="bg-red-700 hover:bg-red-800 text-xs h-6 py-4 items-center drop-shadow-md shadow-black">
          <Clock size={17} /> CheckOut
        </Button>
      </div>
      <div className="flex px-6 gap-x-6 justify-around items-center ">
        <Button className="border-2 border-gray-600 rounded-none text-xs text-gray-600 h-5 items-center font-bold px-4 py-1">
          <Check size={17} color="#4b5563" /> Apply Leave
        </Button>
        <Button className="border-2 border-gray-600 rounded-none text-xs text-gray-600 h-5 items-center font-bold px-4 py-1">
          Log Time
        </Button>
      </div>
    </div>
  );
};

export default CallToActionBar;
