import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Input = ({ handleSearch, setLocation }) => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input
        type="text"
        placeholder="Search City"
        className="w-full bg-transparent border-b-2 text-2xl placeholder-white  text-white"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-20px] text-2xl cursor-pointer text-white outline-none">
        <AiOutlineSearch></AiOutlineSearch>
      </div>
      
    </form>
  );
};

export default Input;
