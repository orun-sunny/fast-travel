import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingComponent = ({ loading }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center px-8 items-center bg-gray-500 bg-opacity-50 z-50 ${
        loading ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <LoadingOutlined />
            <p>Finding the best value price</p>
          </div>
          <div className="flex gap-2 items-center">
            <LoadingOutlined />
            <p className="text-[#A0A0A0]">Checking your details</p>
          </div>
          <div className="flex gap-2 items-center">
            <LoadingOutlined />
            <p className="text-[#A0A0A0]">Sorting your preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
