import React from "react";
import Dropdown from "./Dropdown";

const Notice = () => {
  return (
    <div>
      <div
        id="notice"
        className="bg-gradient-to-b from-black to-gray-800 h-auto min-h-screen w-full flex flex-col"
      >
        <h1 className="notice-title text-7xl font-title font-bold text-white flex flex-col items-center mt-12 p-10">
          Notice Page!
        </h1>
        <Dropdown/>
      </div>
    </div>
  );
};

export default Notice;
