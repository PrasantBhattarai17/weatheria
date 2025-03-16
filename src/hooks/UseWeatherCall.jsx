import React, { useState, useEffect } from 'react';
import { API_KEY } from '../utils/constants';

export const UseWeatherCall = (city) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!res.ok) {
          throw new Error("Unfortunately! Could not fetch weather data.");
        }

        const json = await res.json();
        setWeather(json);
      } catch (error) {
        setError(error.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

   
    if (city) {
      fetchWeatherApi();
    } else {
      setLoading(false); 
    }
  }, [city]); 

  return { weather, loading, error };
};