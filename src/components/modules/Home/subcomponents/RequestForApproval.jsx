import React from "react";

import { employeeRequest } from "../../../../utils/dummyData";

const Container = () => {
  return (
    <div>
      {employeeRequest.map(({ id, name, designation, image, icon }) => {
        return (
          <div key={id} className="flex  py-1">
            <div className="w-8 flex justify-center pt-1">{icon}</div>
            <div className="flex-1">
              <h3 className="text-base font-medium">{name}</h3>
              <p className="text-sm text-[rgb(119,118,118)]">{designation}</p>
            </div>
            <div>
              <img
                src={image}
                className=" w-10 h-10 rounded-full bg-clip-padding bg-center bg-contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Container;
