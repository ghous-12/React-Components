import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { Button } from "../../../controls";

const Attendance = () => {
  const [countUpTime, setCountUpTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [countDownTime, setCountDownTime] = useState({
    hours: 8,
    minutes: 0,
    seconds: 0,
  });
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [expectedCheckoutTime, setExpectedCheckoutTime] = useState("");

  useEffect(() => {
    let upInterval, downInterval;

    if (isCheckedIn) {
      upInterval = setInterval(() => {
        setCountUpTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime;

          seconds++;
          if (seconds >= 60) {
            seconds = 0;
            minutes++;
          }
          if (minutes >= 60) {
            minutes = 0;
            hours++;
          }

          return { hours, minutes, seconds };
        });
      }, 1000);

      downInterval = setInterval(() => {
        setCountDownTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime;

          if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(downInterval);
            return prevTime;
          }

          seconds--;
          if (seconds < 0) {
            seconds = 59;
            minutes--;
          }
          if (minutes < 0) {
            minutes = 59;
            hours--;
          }

          return { hours, minutes, seconds };
        });
      }, 1000);
    }

    return () => {
      clearInterval(upInterval);
      clearInterval(downInterval);
    };
  }, [isCheckedIn]);

  const handleButtonClick = () => {
    if (!isCheckedIn) {
      const now = new Date();
      const checkoutTime = new Date(now.getTime() + 8 * 60 * 60 * 1000); // Add 8 hours
      setExpectedCheckoutTime(
        checkoutTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      setIsCheckedIn(true);
    } else {
      setCountUpTime({ hours: 0, minutes: 0, seconds: 0 });
      setCountDownTime({ hours: 8, minutes: 0, seconds: 0 });
      setExpectedCheckoutTime("");
      setIsCheckedIn(false);
    }
  };

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
        <strong className=" text-base font-bold">{`${day} ${month} ${year}`}</strong>
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
