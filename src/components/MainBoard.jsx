import React from "react";
import { UseWeatherCall } from "../hooks/UseWeatherCall";
import { countries } from "../utils/constant.jsx";
import { useSelector } from "react-redux";
import { FaExclamationTriangle } from 'react-icons/fa';

const MainBoard = () => {
  const city=useSelector((store)=>store.weather?.searchedCity);
  const { weather: data, loading, error } = UseWeatherCall(city);
  const iconCode = data?.weather?.[0]?.icon;
  const about = data?.weather?.[0]?.main;
  const weatherIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  if (loading) {
    return (
      <div className="min-w-screen h-[30rem] flex my-8 px-4 items-center justify-center">
        <p className="text-white text-2xl">Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-w-screen h-[35rem] flex my-8 px-4 items-center justify-center">
        <div className="w-[90%] bg-[#2e2f3a] border-[#383842] border-2 h-[80%] rounded-4xl shadow-2xl flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <FaExclamationTriangle className="text-red-500 text-7xl animate-bounce" />
            <h2 className="text-4xl font-mono text-white font-semibold">Oops!</h2>
            <div className="text-center">
              <p className="text-2xl text-red-400 mb-2">
                City "{city}" not found
              </p>
              <p className="text-gray-400 text-lg">
                Please check the city name and try again
              </p>
            </div>
            
            <div className="mt-4 p-4 bg-[#383842] rounded-lg">
              <p className="text-gray-300 text-sm">
                Suggestions:
                <ul className="list-disc list-inside mt-2 text-gray-400">
                  <li>Check for spelling mistakes</li>
                  <li>Try using the full city name</li>
                  <li>Make sure the city exists</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-screen h-[30rem] flex md:my-8 my-16 px-4 items-center justify-center ">
      <div className=" w-[90%] bg-[#2e2f3a] border-[#383842] border-2 md:h-[80%] h-[90%] rounded-4xl shadow-2xl px-2">
        <div className="md:grid  grid-cols-12 w-full md:h-[50%]">
          <div className="md:col-span-6 flex md:grid md:grid-cols-6  md:w-full md:h-full justify-around">

          <div className=" col-span-2 h-full text-center flex items-center flex-col">
            <img src={weatherIcon} className="md:w-[55%] md:h-[65%] h-[70px] w-[70px]" />
            <h1 className="text-2xl text-white font-mono  ">{about}</h1>
        </div>

          <div className=" col-span-4 h-full text-center flex flex-col overflow-hidden">
            <span className="h-[60%] md:text-7xl text-4xl font-mono text-white pt-6 px-1 w-full">
            {data?.name || "Unknown"}
          </span>
            <span className="md:text-3xl text-xl font-mono text-white font-semibold pt-2 text-center">
              {countries[data?.sys?.country] || "N/A"}
          </span>
        </div>
          </div>

          <div className="col-span-2 h-full flex flex-col text-center">
            <span className="md:h-[60%] h-[20%] md:text-6xl text-2xl font-mono text-white pt-6 px-1 w-full">
              {Math.round(data?.main?.temp)}°<sub className="md:text-3xl text-xl">F</sub>
            </span>
            <span className="md:text-3xl text-xl font-mono text-white font-semibold pt-2">
              Temperature
          </span>
        </div>

          <div className="col-span-2 h-full flex flex-col text-center">
            <span className="md:h-[60%] h-[20%] md:text-6xl text-3xl font-mono text-white pt-6 px-1 w-full">
            {data?.main?.humidity}%
          </span>
            <span className="md:text-3xl text-xl font-mono text-white font-semibold pt-2">
              Humidity
            </span>
        </div>

          <div className="col-span-2 h-full flex flex-col text-center">
            <span className="md:h-[60%] h-[20%] md:text-6xl text-3xl font-mono text-white pt-6 px-1 w-full">
            {data?.wind?.speed}
              <sub className="md:text-4xl text-xl">km/h</sub>
            </span>
            <span className="md:text-3xl text-xl font-mono text-white font-semibold pt-2">
              Wind Speed
          </span>
          </div>
        </div>
        <div className="h-[50%] w-ful md:grid grid-cols-12  hidden ">
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-3 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2" 
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-2 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2" 
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-2 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2" 
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-2 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2" 
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-2 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2" 
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-2 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2"
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-2 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2" 
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-2 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2" 
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-2 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2"
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-2 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2" 
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-2 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2" 
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
          <div className="h-[90%] col-span-1 mx-1 bg-[#a8caca] flex flex-col justify-center items-center py-2 shadow-2xl border-[1px] border-[#8ea9a9] rounded-4xl">
            <span className="text-2xl font-mono font-semibold">1am</span>
            <img
              className="my-2" 
              src={weatherIcon}
              alt="Weather Icon"
            />
            <span className="text-2xl font-mono font-semibold">17°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
