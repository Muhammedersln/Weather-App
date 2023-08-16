import { getCurrentDate } from "../utils/currentDate";
import {IoLocationSharp} from 'react-icons/io5'
const Current = ({ data }) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;

  return (
    <div>
      <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
        <div className="flex items-center">
          <div>
            <h1 className="text-3xl text-white">Today</h1>
            <p className="text-white">{currentDate}</p>
          </div>
          {weatherIcon && (
            <div>
              <img
                src={weatherIcon}
                alt={data.current.condition.text}
                className="w-[50px] object-cover"
              />
            </div>
          )}
        </div>
        <p className="text-5xl text-white">
          {data.current.temp_c.toFixed()}
          <span>°</span>
        </p>
        <span className="text-white">{data.current.condition.text}</span>
      </div>
      <div className="flex">
        <div className="flex items-center bg-white/90 px-2 py-2 rounded-xl text-black">
            <IoLocationSharp  />
            <span>{data.location.name},{data.location.region}</span>
        </div>
      </div>
    </div>
  );
};

export default Current;
