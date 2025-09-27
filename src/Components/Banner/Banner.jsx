import React from "react";
import bnrImg from "../../assets/vector1.png";

const Banner = ({progressCount, resolvedCount}) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-center gap-6 p-6">
        {/* In-Progress Card */}
        <div className="w-full h-32 rounded-lg flex flex-col justify-center items-center text-white relative overflow-hidden bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          {/* Background Pattern - top-left */}
          <img
            src={bnrImg}
            alt=""
            className="absolute top-0 left-0 w-1/2 opacity-60"
          />
          {/* Background Pattern - bottom-right */}
          <img
            src={bnrImg}
            alt=""
            className="absolute bottom-0 right-0 w-1/2 opacity-60 rotate-180"
          />
          <h3 className="text-lg font-medium relative z-10">In-Progress</h3>
          <p className="text-2xl font-bold relative z-10">{progressCount}</p>
        </div>

        {/* Resolved Card */}
        <div className="w-full h-32 rounded-lg flex flex-col justify-center items-center text-white relative overflow-hidden bg-gradient-to-r from-[#54CF68] to-[#00827A]">
          {/* Background Pattern - top-left */}
          <img
            src={bnrImg}
            alt=""
            className="absolute top-0 left-0 w-1/2 opacity-60"
          />
          {/* Background Pattern - bottom-right */}
          <img
            src={bnrImg}
            alt=""
            className="absolute bottom-0 right-0 w-1/2 opacity-60 rotate-180"
          />
          <h3 className="text-lg font-medium relative z-10">Resolved</h3>
          <p className="text-2xl font-bold relative z-10">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
