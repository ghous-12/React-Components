import React from "react";
import { leaveReport } from "../../../../utils/dummyData";

const LeaveReport = () => {
  return (
    <div className="flex flex-col gap-y-2 justify-center ">
      {leaveReport.map(({ id, name, total, used }) => {
        return (
          <div key={id} className="flex gap-x-2 ">
            <div className="w-8 h-8 border-2 border-lime-500 rounded-full flex justify-center ">
              {used}
            </div>
            <h3 className="text-base text-black font-medium">
              {name}
              <p className="text-sm text-[rgb(119,118,118)]">Total: {total}</p>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default LeaveReport;
