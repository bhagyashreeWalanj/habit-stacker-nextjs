"use client";
import React from "react";
import MainStatistics from "./RightSideBar/MainStatistics";
import MainCalendar from "./RightSideBar/MainCalendar";

const AllHabitsRightSideBar = () => {
  return (
    <div className="w-[30%] flex flex-col items-center bg-white dark:bg-darkBackground">
      <MainStatistics />
      <MainCalendar />
    </div>
  );
};

export default AllHabitsRightSideBar;
