"use client";
import { useState } from "react";
import Input from "./components/Input";
import Current from "./components/Current";
import WeatherDeatils from "./components/WeatherDeatils";
import WeekForecast from "./components/WeekForecast";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const api_key = process.env.WEATHER_APP_API_KEY;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=916499568563497b94a141649231408&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length == 0 && error === "") {
    content = (
      <div className="h-screen text-white text-center mt-[5rem] ">
        <h2 className="text-3xl font-bold mb-4">Welcome to the weather app</h2>
        <p className="text-xl">Enter a city name to get the weather forecast</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="h-screen text-white text-center mt-[5rem]">
        <p className="text-3xl font-bold mb-4">City Not Found</p>
        <p className="text-xl">Enter a Valid City</p>
      </div>
    );
  } else {
    content = (
      <div>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current data={data}></Current>
          <WeekForecast  data={data}></WeekForecast>
        </div>
        <div>
          <WeatherDeatils data={data} ></WeatherDeatils>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 ">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-screen max-lg:h-fit">
        {/* input and logo */}
        <div className=" flex flex-col p-10 md:flex-row justify-between items-center">
          <Input handleSearch={handleSearch} setLocation={setLocation}></Input>
          <h1 className="mb-8 md:mb-0 order-1 py-2 px-4 text-2xl rounded-xl font-bold italic">
            Weather App.
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};
export default Home;
