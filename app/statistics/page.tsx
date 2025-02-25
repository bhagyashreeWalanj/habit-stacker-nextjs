import React from "react";
import StatisticBoard from "./StatisticBoard";
import StatisticsHabitArea from "./components/StatisticsHabitArea";

const statistic = () => {
  return (
    <div className="max-lg:flex-col w-full flex flex-row gap-0 bg-white dark:bg-slate-800">
      <div className="flex-col flex-grow m-3">
        <StatisticBoard />
        <StatisticsHabitArea />
      </div>
    </div>
  );
};

export default statistic;
