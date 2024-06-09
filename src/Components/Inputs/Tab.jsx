import React, { useState } from "react";
import {
  HotelPrimaryIcon,
  HotelWhiteIcon,
  PlanePrimaryIcon,
  PlaneWhiteIcon,
} from "../../../icons";
import { MdFlight } from "react-icons/md";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="px-">
      <div className="h-14 w-56 flex">
        <button
          onClick={() => setActiveTab(0)}
          className={`rounded-tl-md flex-1 flex justify-center items-center gap-2 ${
            activeTab === 0
              ? "bg-white shadow-md shadow-white"
              : "bg-[#D7D1C3] text-white"
          }`}
        >
          <MdFlight
            alt={"plane"}
            code={activeTab === 0 ? PlanePrimaryIcon : PlaneWhiteIcon}
            height={18}
            width={18}
          />
          Flights
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`rounded-tr-md flex-1 flex justify-center items-center gap-2 ${
            activeTab === 1
              ? "bg-white shadow-md shadow-white"
              : "bg-[#D7D1C3] text-white"
          }`}
        >
          <MdFlight
            alt={"plane"}
            code={activeTab === 1 ? HotelPrimaryIcon : HotelWhiteIcon}
            height={18}
            width={18}
          />
          Hotels
        </button>
      </div>
    </div>
  );
};

export default Tab;
