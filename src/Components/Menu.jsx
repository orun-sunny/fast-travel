import React from "react";
import { Link, useLocation } from "react-router-dom";
import PassengerCounter from "./PassengerCounter";
import AirplaneClassSelect from "./AirplaneClassSelect";
import Tab from "./Inputs/Tab";
import { FaArrowRight } from "react-icons/fa6";
import { GrDirections } from "react-icons/gr";
import { FaRepeat } from "react-icons/fa6";
import OneWayFlights from "./OneWayFlights";
import AnyFlight from "./AnyFlight";

const Menu = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname
      ? "tab tab-active [--tab-bg:#e7fddc] [--tab-text-color: #188920]"
      : "tab";
  };
  return (
    <div className="">
      {/* main tab */}
      <Tab />
      <div className=" relative  bg-white max-w-screen-lg shadow-xl  w-full px-8  flex flex-col lg:flex-row   ">
        <div
          role="tablist"
          className="tabs w-full lg:w-[400px] py-12 flex justify-center "
        >
          <div className="">
            <Link to="/" role="tab" className={`${isActive("/")} `}>
              <FaArrowRight className="mr-2" /> One-Way
            </Link>
          </div>

          <div className="">
            <Link
              to="/round_trip"
              role="tab"
              className={isActive("/round_trip")}
            >
              <FaRepeat className="mr-2" />
              Round-trip
            </Link>
          </div>
          <Link to="/multi_city" role="tab" className={isActive("/multi_city")}>
            <GrDirections className="mr-2" /> Multi-city
          </Link>
        </div>
        <div className=" flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-4 lg:px-0 lg:py-12">
          <div className="flex flex-col lg:flex-row">
            <AnyFlight />
            <PassengerCounter />
            <AirplaneClassSelect />

            {/* <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Direct Flights only</label>
            </div> */}
          </div>
        </div>
      </div>
      {/* <OneWayFlights /> */}
    </div>
  );
};

export default Menu;
