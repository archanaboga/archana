import React from "react";
import { mySkills } from "./constants";

const SkillsUi = () => {
  return (
    <div className=" w-full h-screen   flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-6">
        {mySkills.map((skillItem) => (
          <h3 className="text-xl font-semibold ">{skillItem}</h3>
        ))}
      </div>
    </div>
  );
};

export default SkillsUi;
