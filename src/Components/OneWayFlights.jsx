import React, { useEffect, useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import PlaceSearchforDeparture from "./PlaceSearchforDeparture";
import DatePickFromCalendar from "./DatePickFromCalendar";
// import PassengerCounter from "./PassengerCounter";
import AirplaneClassSelect from "./AirplaneClassSelect";
import PlaceSearchforReturn from "./PlaceSearchforReturn";
import SearchResult from "./SearchResult";
import LoadingComponent from "./LoadingComponent";
import toast from "react-hot-toast";

import { FaSearch } from "react-icons/fa";

import PassengerCounter from "./PassengerCounter";
import { Link } from "react-router-dom";

const OneWayFlights = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [Date, setDate] = useState(null);
  const [departCode, setDepartCode] = useState("");
  const [arrivalCode, setArrivalCode] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Cheapest");
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    setSearchValue(departCode);
    try {
      setLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("apikey", "ITT88534696524514");
      myHeaders.append(
        "secretecode",
        "BOUINpK3g7kUI9TJ9eVgaK8l1stXNzz4YC5KiOBotf9"
      );

      const raw = JSON.stringify({
        journey_type: "OneWay",
        segment: [
          {
            departure_airport_type: "AIRPORT",
            departure_airport: departCode,
            arrival_airport_type: "AIRPORT",
            arrival_airport: arrivalCode,
            departure_date: Date,
          },
        ],
        travelers_adult: 1,
        travelers_child: 0,
        travelers_child_age: 0,
        travelers_infants: 0,
        travelers_infants_age: [""],
        preferred_carrier: [null],
        non_stop_flight: "any",
        baggage_option: "any",
        booking_class: "Economy",
        supplier_uid: "all",
        partner_id: "",
        language: "en",
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "https://devapi.innotraveltech.com/flight/search",
        requestOptions
      );
      const result = await response.json();

      if (result.status === "success") {
        setSearchResult(result.data);
        console.log("Search Results:", result.data);
      } else {
        console.log("status:", result.status);
        console.log("reason:", result.reason);
        toast.error("Flight not available");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after the API call is completed
    }
  };

  const handleSearchClick = () => {
    if (Date && departCode && arrivalCode) {
      handleSearch();
      history.push("/");
    }
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  if (loading) {
    return <LoadingComponent loading={loading} />;
    // return <Loader loading={loading} />;
  }

  return (
    <>
      <div className="relative w-[1200px]  z-10 py-12 left-[550px] bg-white px-4 shadow-xl">
        <div className="flex py-4 px-24  ">
          <PlaceSearchforDeparture
            key={1}
            setDepartCode={setDepartCode}
            LabelName={"From"}
            width={"300"}
          />
          <span className="flex items-center justify-center w-[40px]">
            <GoArrowSwitch />
          </span>
          <PlaceSearchforReturn
            key={2}
            setArrivalCode={setArrivalCode}
            LabelName={"To"}
            width={"300"}
          />
          <DatePickFromCalendar
            LabelName={"Depart"}
            width={"200"}
            setDate={setDate}
          />
        </div>
        <div className="flex absolute justify-center px-96">
          <button
            className="bg-[#7e232c] text-white px-12 py-4 flex gap-4  text-2xl"
            onClick={handleSearchClick}
          >
            <FaSearch />
            Search
          </button>
        </div>
      </div>
      <div>
        {searchResult.length > 0 && (
          <div>
            <div className="flex justify-center relative top-[-20px] w-[900px] left-[600px] py-28">
              <button
                className={`tab-btn w-full ${
                  selectedTab === "Cheapest" ? "active" : ""
                }`}
                onClick={() => handleTabChange("Cheapest")}
              >
                Cheapest
                <p>
                  <small>Less than ₨ 145353.00 • 08H, 00M, 00S</small>
                </p>
              </button>
              <button
                className={`tab-btn w-full ${
                  selectedTab === "Fastest" ? "active" : ""
                }`}
                onClick={() => handleTabChange("Fastest")}
              >
                Fastest
                <p>
                  <small>Above ₨ 145353.00 • 06H, 45M, 00S</small>
                </p>
              </button>
            </div>
            <div>
              {selectedTab === "Cheapest" && (
                <div>
                  {searchResult
                    .filter((flight) => flight.total_price < 145353.0)
                    .map((flight, index) => (
                      <SearchResult
                        key={index}
                        flight={flight}
                        selectedTab={selectedTab}
                      />
                    ))}
                </div>
              )}

              {selectedTab === "Fastest" && (
                <div>
                  {searchResult
                    .filter((flight) => flight.total_price >= 145353.0)
                    .map((flight, index) => (
                      <SearchResult
                        key={index}
                        flight={flight}
                        selectedTab={selectedTab}
                      />
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OneWayFlights;
