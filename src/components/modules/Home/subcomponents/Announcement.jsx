import React from "react";
import { officeAnnouncements } from "../../../../utils/dummyData";

const Announcement = () => {
  return (
    <>
      {officeAnnouncements.map(({ id, icon, text }) => {
        return (
          <div className="flex pb-3 ">
            {/* icon */}
            <div className="pt-0.5">{icon}</div>

            {/* Text content div */}
            <div className="pl-2">
              <p className="font-semibold">{text}</p>
              <p className="text-sm font-medium text-slate-500">
                Menu description.
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Announcement;
