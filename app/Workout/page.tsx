import React from "react";
import StepChart from "./charts/chart-radial-shape";
// import CalorieChart from "./charts/calorie-chart";
import SleepChart from "./charts/sleep-chart";
import WeightChart from "./charts/weight-chart";
import WaterChart from "./charts/water-chart";

const Workout = () => {
  return (
    <div className="max-lg:flex-col w-full flex flex-row gap-0 bg-white dark:bg-slate-800">
      <div className="flex-col flex-grow m-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-3 mx-3 ">
          <StepChart />
          <WaterChart />
          <SleepChart />
          <WeightChart />
        </div>
      </div>
    </div>
  );
};

export default Workout;
