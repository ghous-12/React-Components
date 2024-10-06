import React, { useContext } from "react";
import { Clock } from "lucide-react";
import { Button } from "../../../controls";
import { AttendanceContext } from "../../../controls/AttendanceContext";

const Attendance = () => {
  const { isCheckedIn, handleButtonClick, countUpTime, expectedCheckoutTime } =
    useContext(AttendanceContext);

  const formatTime = (time) => {
    return `${time.hours.toString().padStart(2, "0")}:${time.minutes
      .toString()
      .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`;
  };

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <>
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
      </Button>

      <div className="flex flex-col w-full items-center pt-8">
        <strong className="text-3xl">{formatTime(countUpTime)} Hrs</strong>
        <strong className="text-base font-bold">{`${day} ${month} ${year}`}</strong>
        {isCheckedIn && (
          <>
            <strong className="pt-4 text-base">
              Your expected Check out time is:
            </strong>
            <strong className="bg-gray-300 text-red-700 text-sm px-2 rounded-full">
              {expectedCheckoutTime}
            </strong>
          </>
        )}
      </div>
    </>
  );
};

export default Attendance;
