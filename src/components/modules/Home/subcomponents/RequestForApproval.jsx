import React from "react";
import { Star } from "lucide-react";

import SVG from "../../../../assets/react.svg";

const Container = () => {
  return (
    <div>
      <div className="flex  py-1">
        <div className="w-8 flex justify-center pt-1">
          <Star size={18} color="#dc060c" fill="#dc060c" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-medium">Mr. Ali</h3>
          <p className="text-sm text-[rgb(119,118,118)]">Software Engineer</p>
        </div>
        <div>
          <img src={SVG} className="pt-4" />
        </div>
      </div>
      <div className="flex  py-1">
        <div className="w-8 flex justify-center pt-1">
          <Star size={18} />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-medium">Mr. Shaheer</h3>
          <p className="text-sm text-[rgb(119,118,118)]">Software Engineer</p>
        </div>
        <div>
          <img src={SVG} className="pt-4" />
        </div>
      </div>
      <div className="flex  py-1">
        <div className="w-8 flex justify-center pt-1">
          <Star size={18} />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-medium">Ms. Urooj</h3>
          <p className="text-sm text-[rgb(119,118,118)]">Quality Assurance</p>
        </div>
        <div>
          <img src={SVG} className="pt-4" />
        </div>
      </div>
    </div>
  );
};

export default Container;
