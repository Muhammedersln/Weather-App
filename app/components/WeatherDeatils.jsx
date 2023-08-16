import { BsSunrise, BsSunset } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { MdAir } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
const WeatherDeatils = ({ data }) => {
  return (
    <div>
      <div className="p-12">
        <h1 className="mb-4 text-2xl text-white"> Weather Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Wind Speed</h3>
              <h3>{data.current.wind_mph}</h3>
            </div>
            <div className="">
              <GiWindSlap fontSize={60}></GiWindSlap>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Humidity</h3>
              <h3>{data.current.humidity}%</h3>
            </div>
            <div className="">
              <WiHumidity fontSize={80}></WiHumidity>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Wind Direction</h3>
              <h3>{data.current.wind_dir}</h3>
            </div>
            <div className="">
              <GiCompass fontSize={70}></GiCompass>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Sunrise</h3>
              <h3>{data.forecast.forecastday[0]?.astro.sunrise}</h3>
            </div>
            <div className="">
              <BsSunrise fontSize={70}></BsSunrise>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Sunset</h3>
              <h3>{data.forecast.forecastday[0]?.astro.sunset}</h3>
            </div>
            <div className="">
              <BsSunset fontSize={70}></BsSunset>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Air Pressure</h3>
              <h3>{data.current.pressure_mb} hPa</h3>
            </div>
            <div className="">
              <MdAir fontSize={65}></MdAir>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Feel Like</h3>
              <h3>{data.current.feelslike_c} °</h3>
            </div>
            <div className="">
              <CiTempHigh fontSize={60}></CiTempHigh>
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Visibility</h3>
              <h3>{data.current.vis_km} km</h3>
            </div>
            <div className="">
              <FaEye fontSize={55}></FaEye>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDeatils;
