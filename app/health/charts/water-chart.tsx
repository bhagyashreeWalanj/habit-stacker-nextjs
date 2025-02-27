"use client";
import { useState, useEffect } from "react";
import { Droplets, RotateCcw } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const DAILY_GOAL = 3000; // 3L in ml
const INCREMENT = 250; // 250ml per click

export default function WaterChart() {
  const [waterIntake, setWaterIntake] = useState(2000);

  useEffect(() => {
    const saved = localStorage.getItem("waterIntake");
    if (saved) {
      setWaterIntake(Number(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("waterIntake", waterIntake.toString());
  }, [waterIntake]);

  const addWater = () => {
    if (waterIntake < DAILY_GOAL) {
      setWaterIntake((prev) => Math.min(prev + INCREMENT, DAILY_GOAL));
    }
  };

  const resetWater = () => {
    setWaterIntake(0);
  };

  const percentage = (waterIntake / DAILY_GOAL) * 100;
  const waveOffset = Math.min(100 - percentage, 100);
  const chartConfig = {
    water: {
      label: "water",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig;

  console.log("waterIntake", waterIntake);
  return (
    <Card className="flex flex-col transition-all hover:shadow-2xl shadow-md">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-xl">Sleep Tracker</CardTitle>
        <CardDescription className="text-xs">
          Last Night&apos;s Sleep
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <div className="relative mx-auto aspect-square max-w-[180px] mt-10 flex items-center justify-center">
            {/* Main Circle Container */}
            <div className="absolute inset-0 rounded-full border-4 border-muted overflow-hidden">
              {/* Water Fill Container */}
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateY(${waveOffset}%)`,
                }}
              >
                <svg
                  className="waves"
                  xmlns="http://www.w3.org/2000/svg"
                  xlinkHref="http://www.w3.org/1999/xlink"
                  viewBox="15 24 150 28"
                  preserveAspectRatio="none"
                  shapeRendering="auto"
                >
                  <defs>
                    <path
                      id="gentle-wave"
                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                  </defs>
                  <g className="parallax">
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="-2"
                      fill="#dc143c"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="-2"
                      fill="#dc143cBF"
                    />
                    {/* <use xlinkHref="#gentle-wave" x="48" y="5" fill="#6aaad8" />
                  <use xlinkHref="#gentle-wave" x="48" y="7" fill="#6ac6d8" /> */}
                  </g>
                </svg>
                <div className={`absolute inset-0 top-8 bg-[#dc143c] `} />
              </div>
            </div>

            {/* Content */}
            <div
              className={`${
                waterIntake >= 2000 ? "text-white" : "text-black"
              } relative flex flex-col items-center z-10`}
            >
              <span className="text-4xl font-bold">
                {(waterIntake / 1000) % 1 === 0
                  ? `${(waterIntake / 1000).toFixed(0)}L`
                  : `${(waterIntake / 1000).toFixed(2)}L`}
                {/* {(waterIntake / 1000).toFixed(2)} */}
              </span>
              <span className="text-xl ">
                / {(DAILY_GOAL / 1000).toFixed(0)}L
              </span>
            </div>
          </div>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-4 pt-2">
        <div className="flex items-center justify-between w-full gap-2 mt-5">
          <Button
            onClick={addWater}
            className="flex-1"
            disabled={waterIntake >= DAILY_GOAL}
          >
            <Droplets className="h-4 w-4 mr-2" />
            Add {INCREMENT}ml
          </Button>
          <Button
            onClick={resetWater}
            variant="outline"
            size="icon"
            className="shrink-0"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-sm text-muted-foreground text-center">
          {waterIntake < DAILY_GOAL
            ? ((DAILY_GOAL - waterIntake) / 1000) % 1 === 0
              ? `${((DAILY_GOAL - waterIntake) / 1000).toFixed(0)}L remaining`
              : `${((DAILY_GOAL - waterIntake) / 1000).toFixed(2)}L remaining`
            : "Daily goal achieved! 🎉"}
        </div>
      </CardFooter>
    </Card>
  );
}
