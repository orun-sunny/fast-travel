import React from "react";
import Menu from "./Menu";

import { Outlet } from "react-router-dom";
import Banner from "./Banner";
const Home = () => {
  return (
    <div>
      <div className=" relative">
        <Banner />
      </div>
      <div className=" border-2 absolute top-[400px] left-[550px] w-[1200px] rounded shadow-xl p-10 ">
        <Menu></Menu>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
