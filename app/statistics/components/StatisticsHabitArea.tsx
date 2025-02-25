"use client";
import React from "react";
import StatisticHabitCard from "./StatisticHabitCard";
import { useGlobalContextProvider } from "@/app/types/contextApi";
import { HabitType } from "@/app/types/GlobalTypes";

const StatisticsHabitArea = () => {
  const {
    allHabitsObject: { allHabits },
  } = useGlobalContextProvider();
  return (
    <div className="bg-white dark:bg-slate-800 p-4 mt-4 rounded-md">
      {allHabits.map((habit: HabitType, index: number) => (
        <div className="" key={index}>
          <StatisticHabitCard habit={habit} />
        </div>
      ))}
    </div>
  );
};

export default StatisticsHabitArea;
