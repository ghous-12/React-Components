import React, { useContext } from "react";
import { Check, Clock } from "lucide-react";
import { AttendanceContext } from "../controls/AttendanceContext";
import { Button } from "../controls";

const CallToActionBar = () => {
  const { isCheckedIn, handleButtonClick, countUpTime } =
    useContext(AttendanceContext);
  const formatTime = (time) => {
    return `${time.hours.toString().padStart(2, "0")}:${time.minutes
      .toString()
      .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white w-full flex justify-between pl-3 py-2 items-center border-t-2 border-[rgb(224,223,224)]">
      <div className="flex items-center">
        <Button
          className={
            isCheckedIn
              ? "bg-red-700 hover:bg-red-800"
              : "bg-lime-500 hover:bg-lime-600"
          }
          onClick={handleButtonClick}
        >
          <Clock size={16} />
          {isCheckedIn ? "Check Out" : "Check In"}
        </Button>{" "}
        <strong className="pl-3">{formatTime(countUpTime)} Hrs</strong>
      </div>
      <div className="flex px-6 gap-x-6 justify-around items-center ">
        <Button className="border-2 border-gray-600 rounded-none text-xs text-gray-600 h-5 items-center font-bold px-4 py-1">
          <Check size={17} color="#4b5563" />
          Apply Leave
        </Button>
        <Button className="border-2 border-gray-600 rounded-none text-xs text-gray-600 h-5 items-center font-bold px-4 py-1">
          Log Time
        </Button>
      </div>
    </div>
  );
};

export default CallToActionBar;
