import React, { useState } from "react";
import UseTodayDate from "../hooks/UseTodayDate";
import { useDispatch } from "react-redux";
import { SearchingCity } from "../Store/SearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState("Kathmandu");
  const [isCelsius, setIsCelsius] = useState(true);

  const today = UseTodayDate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      dispatch(SearchingCity(data)); 
    }
  };

  return (
    <div className="md:flex md:px-4 md:p-0 p-4 text-center md:w-full max-w-screen justify-between items-center h-24">
      <div className="text-white h-[48px]">
        <h1 className="md:text-3xl text-2xl font-mono font-bold px-3">{today}</h1>
      </div>

      <div className="flex md:w-[45%] md:p-0 p-2 justify-between h-[60%]">
        <div className="text-white w-[60%] h-[48px] flex">
          <span className="w-16 text-center text-white border-[#383842] shadow-lg rounded-l-4xl border-l-[1px] border-y-[1px] h-full flex items-center justify-center">
            🔍
          </span>
          <input
            value={data}
            onChange={(e) => setData(e.target.value)} 
            onKeyDown={handleSearch} 
            placeholder="Search City or Postcode"
            className="text-2xl text-white border-[#383842] font-mono outline-0 px-2 w-full h-full rounded-r-4xl border-l-0 border-y-[1px] border-r-[1px]"
            type="text"
          />
        </div>

        <div className="text-white md:w-[12%] w-[16%] h-[48px] text-center md:text-2xl text-xl font-semibold px-2 border-[1px] border-[#383842] shadow-lg mx-2 bg-[#2e2f3a] flex items-center justify-center rounded-4xl">
          <select
            className="bg-transparent font-mono outline-none w-full h-full"
            defaultValue="Eng"
          >
            <option value="Eng">ENG</option>
          </select>
        </div>

        <div className="text-white md:w-[13%] w-[16%] h-[48px] rounded-4xl bg-[#2e2f3a] flex border-[1px] border-[#383842] shadow-lg">
          <div
            className={`w-[50%] h-full rounded-l-4xl text-center text-3xl flex items-center justify-center cursor-pointer ${
              isCelsius ? "bg-[#c9e9e9] text-black" : "text-white"
            }`}
            onClick={() => setIsCelsius(true)}
          >
            C°
          </div>
          <div
            className={`w-[50%] h-full rounded-r-4xl text-center text-3xl flex items-center justify-center cursor-pointer ${
              !isCelsius ? "bg-[#c9e9e9] text-black" : "text-white"
            }`}
            onClick={() => setIsCelsius(false)}
          >
            F°
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;