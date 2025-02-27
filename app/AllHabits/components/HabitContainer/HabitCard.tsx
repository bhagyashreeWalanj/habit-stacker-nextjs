"use client";
import React from "react";
import { HabitType } from "@/app/types/GlobalTypes";
import { useGlobalContextProvider } from "@/app/types/contextApi";
import SingleHabitCard from "./SingleHabitCard";

const HabitCard = ({ allHabits }: { allHabits: HabitType[] }) => {
  const { selectedCurrentDateObject } = useGlobalContextProvider();
  const { selectedCurrentDate } = selectedCurrentDateObject;

  return (
    <>
      {allHabits.map((habit: HabitType) => {
        return (
          <div
            className="flex p-0 items-center justify-between"
            key={`${habit._id}_${habit.name}`}
          >
            {habit.completedDays.some(
              (day) => day.date === selectedCurrentDate
            ) === true && (
              <SingleHabitCard singleHabit={habit} isHabitCompleted={true} />
            )}

            {habit.completedDays.some(
              (day) => day.date === selectedCurrentDate
            ) === false && (
              <SingleHabitCard singleHabit={habit} isHabitCompleted={false} />
            )}
          </div>
        );
      })}
    </>
  );
};
export default HabitCard;
