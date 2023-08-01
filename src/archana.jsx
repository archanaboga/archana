import React, { useState } from "react";
import { leftPannel } from "./constants";
import MySkills from "./skills";
import About from "./contact";
import HomePage from "./home";

const Archana = () => {
  const [currentPage, setCurrentPage] = useState(leftPannel[0]);

  return (
    <div className="w-full ">
      {/* //HEADER */}
      <div className="bg-[black] w-full h-[90px] flex justify-between px-5 items-center overflow-hidden">
        <div className="flex items-center gap-3">
          <div className=""></div>
          {leftPannel?.map((item) => (
            <span
              onClick={() => {
                setCurrentPage(item);
              }}
              className={`font-bold cursor-pointer hover:text-[red] hover:underline  ${
                currentPage === item ? "text-[green]" : ""
              }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="font-bold cursor-pointer hover:text-[red] hover:underline">
          Contact me
        </div>
      </div>
      {/* BODY */}

      {currentPage === "Home" ? (
        <HomePage />
      ) : currentPage === "Skills" ? (
        <MySkills />
      ) : currentPage === "About" ? (
        <About />
      ) : (
        <>Page under progress</>
      )}
    </div>
  );
};

export default Archana;
