import React from "react";

const WeekForecast = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
      {data.forecast.forecastday.map((day, index) => (
        <div  key={index}>
          <div
           
            className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
          >
            <p>
              {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
            </p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <p>H {day.day.maxtemp_c.toFixed()} °</p>
            <p>L {day.day.mintemp_c.toFixed()} °</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
