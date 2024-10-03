import React from "react";
import { employeeAttendance } from "../../../../utils/dummyData";
const TodaysAttendance = () => {
  return (
    <>
      {employeeAttendance.map(({ id, name, checkIn, checkOut }) => {
        return (
          <div key={id}>
            <p>{name}</p>
            <p className="m-0">
              <strong>
                <span className="text-lime-600">IN: </span>
                {checkIn || "---"}
                <span className="text-red-700"> OUT: </span>
                {checkOut || "---"}
              </strong>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default TodaysAttendance;
