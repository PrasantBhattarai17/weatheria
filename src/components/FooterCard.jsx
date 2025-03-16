import React from 'react'
import { UseWeatherCall } from '../hooks/UseWeatherCall'
import { countries } from '../utils/constant.jsx';

const FooterCard = () => {
    const {weather:Ldata}=UseWeatherCall("Lisbon");
    const {weather:Bdata}=UseWeatherCall("Berlin");
    const {weather:Mdata}=UseWeatherCall("Madrid");
    const {weather:Tdata}=UseWeatherCall("Tokyo");
    
    return (
      <div className='w-full md:h-[20rem] h-auto py-8 flex items-center justify-center'>
        <div className='md:grid grid-cols-10 md:h-[94%]  w-[90%] flex flex-col gap-6 md:gap-0'>
          <div className='col-span-2 bg-[#2e2f3a] text-center h-[80%] mx-2 border-2 border-[#ffff] shadow-3xl rounded-4xl border-dashed flex flex-col items-center justify-center'>
            <span className='md:text-9xl text-8xl text-white font-mono'>+</span>
            <span className='text-md text-white font-mono'>Add the cities you are interested in</span>
          </div>
          <div className='col-span-2  bg-[#2e2f3a]  h-[80%] mx-2 border-2 border-[#383842] shadow-3xl rounded-4xl flex flex-col items-center '>
            <img src={`https://openweathermap.org/img/wn/${Ldata?.weather?.[0]?.icon}@2x.png`}></img>
            <span className='text-2xl text-white font-mono font-semibold'>{Ldata?.name}</span>
            <span className='text-md text-white font-mono font-semibold'>{countries[Ldata?.sys?.country]}</span>
            <span className='text-md text-white font-mono font-semibold'>{Math.round(Ldata?.main?.temp)}°F</span>
          </div>
          <div className='col-span-2  bg-[#2e2f3a] h-[80%] mx-2 border-2 border-[#383842] shadow-3xl rounded-4xl flex flex-col items-center  '>
            <img src={`https://openweathermap.org/img/wn/${Bdata?.weather?.[0]?.icon}@2x.png`}></img>
            <span className='text-2xl text-white font-mono font-semibold'>{Bdata?.name}</span>
            <span className='text-md text-white font-mono font-semibold'>{countries[Bdata?.sys?.country]}</span>
            <span className='text-md text-white font-mono font-semibold'>{Math.round(Bdata?.main?.temp)}°F</span>
          </div>
          <div className='col-span-2  bg-[#2e2f3a] h-[80%] mx-2 border-2 border-[#383842] shadow-3xl rounded-4xl flex flex-col items-center  '>
            <img src={`https://openweathermap.org/img/wn/${Mdata?.weather?.[0]?.icon}@2x.png`}></img>
            <span className='text-2xl text-white font-mono font-semibold'>{Mdata?.name}</span>
            <span className='text-md text-white font-mono font-semibold'>{countries[Mdata?.sys?.country]}</span>
            <span className='text-md text-white font-mono font-semibold'>{Math.round(Mdata?.main?.temp)}°F</span>
          </div>
          <div className='col-span-2  bg-[#2e2f3a] h-[80%] mx-2 border-2 border-[#383842] shadow-3xl rounded-4xl flex flex-col items-center  '>
            <img src={`https://openweathermap.org/img/wn/${Tdata?.weather?.[0]?.icon}@2x.png`}></img>
            <span className='text-2xl text-white font-mono font-semibold'>{Tdata?.name}</span>
            <span className='text-md text-white font-mono font-semibold'>{countries[Tdata?.sys?.country]}</span>
            <span className='text-md text-white font-mono font-semibold'>{Math.round(Tdata?.main?.temp)}°F</span>
          </div>
        </div>
      </div>
    );
};

export default FooterCard