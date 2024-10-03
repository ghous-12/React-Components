import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import Button from "../../../controls/Button";
const Attendance = ({ children }) => {
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

  useEffect(() => {
    let upInterval;
    let downInterval;

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
          if (hours >= 24) {
            clearInterval(upInterval);
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
      setIsCheckedIn(true);
    } else {
      setCountUpTime({ hours: 0, minutes: 0, seconds: 0 });
      setCountDownTime({ hours: 8, minutes: 0, seconds: 0 });
      setIsCheckedIn(false);
    }
  };

  const formatTime = (time) => {
    return `${time.hours.toString().padStart(2, "0")}:${time.minutes
      .toString()
      .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {isCheckedIn ? (
        <Button
          className="bg-red-700 hover:bg-red-800 "
          onClick={handleButtonClick}
        >
          <Clock size={16} />
          Check Out
        </Button>
      ) : (
        <Button
          className="bg-lime-500 hover:bg-lime-600"
          onClick={handleButtonClick}
        >
          <Clock size={16} />
          Check In
        </Button>
      )}

      <div className="flex flex-col w-full items-center pt-8">
        <strong className="text-3xl">{formatTime(countUpTime)} Hrs</strong>
        <strong className="pt-4 text-sm">
          Your expected Check out time is:
        </strong>
        {formatTime(countDownTime)}
      </div>
    </>
  );
};

export default Attendance;
