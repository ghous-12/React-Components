import React, { createContext, useState, useEffect } from "react";

export const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
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

  return (
    <AttendanceContext.Provider
      value={{
        countUpTime,
        countDownTime,
        isCheckedIn,
        expectedCheckoutTime,
        handleButtonClick,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};
