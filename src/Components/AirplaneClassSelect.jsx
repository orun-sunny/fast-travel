import React from "react";
// import { FaMinus, FaPlus, FaCaretDown, FaCaretUp } from "react-icons/fa6";

const AirplaneClassSelect = () => {
  return (
    <div className="relative ml-2">
      <select className="select select-info w-[200px] max-w-xs outline-none bg-base-100 rounded-box focus:outline-none border-none shadow-md">
        <option className="my-10 text-2xl w-[250px]">Economy</option>
        <option className="my-10 text-2xl w-[250px]">Premium Economy</option>
        <option className="my-10 text-2xl w-[250px]">Business Class</option>
        <option className="my-10 text-2xl w-[250px]">First Class</option>
      </select>
    </div>
  );
};

export default AirplaneClassSelect;
