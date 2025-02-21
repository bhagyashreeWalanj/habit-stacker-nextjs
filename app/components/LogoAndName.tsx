import React from "react";
import Image from "next/image";

const LogoAndName = () => {
  return (
    <>
      <div className="flex gap-2 items-center sm:justify-start mt-6 justify-between">
        <span className="text-2xl font-light flex items-center gap-2">
          <div className="p-2 rounded-md">
            <Image src={"/goal.png"} width={80} height={80} alt="fittrack" />
          </div>
          <span className="font-bold text-primary dark:text-white">Habit</span>
          <span className="font-bold text-primary dark:text-white">
            Stacker
          </span>
        </span>
      </div>
    </>
  );
};

export default LogoAndName;
