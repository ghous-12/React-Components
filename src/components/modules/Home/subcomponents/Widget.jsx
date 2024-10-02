import React from "react";

const Widget = ({ heading, children }) => {
  return (
    <>
      <div className="bg-[rgb(255,255,255)] w-full h-72 rounded-md px-4 py-2 shadow drop-shadow-xl flex flex-col box-border">
        {/* heading */}
        <div className="flex-none text-xl font-bold pl-1  pt-1 pb-3 h-11">
          {heading}
        </div>

        {/* text content */}
        <div className="border-y-2 py-3 grow ">{children}</div>

        {/* footer */}
        <div className="flex-none h-8"></div>
      </div>
    </>
  );
};

export default Widget;
