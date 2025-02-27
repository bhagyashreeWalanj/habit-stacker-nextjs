"use client";

import { Minus, Plus, RotateCcw } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";

const DAILY_GOAL = 10000; // 3L in ml

//const chartData = [{ steps: 5000, total: 8000, fill: "hsl(var(--primary))" }];

const chartConfig = {
  steps: {
    label: "Steps",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function StepChart() {
  const [stepsToTake, setStepsToTake] = useState(4000);

  // Load saved water intake from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem("stepsToTake");
    if (saved) {
      setStepsToTake(Number(saved));
    }
  }, []);

  // Save water intake to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("stepsToTake", stepsToTake.toString());
  }, [stepsToTake]);

  const addStepsCount = (adjustment: number) => {
    setStepsToTake((prev) =>
      Math.max(0, Math.min(DAILY_GOAL, prev + adjustment))
    );
  };

  const resetSteps = () => {
    setStepsToTake(0);
  };

  const completionPercentage = (stepsToTake / DAILY_GOAL) * 100;
  const endAngle = (completionPercentage / 100) * 360;
  const chartData = [
    { steps: stepsToTake, total: DAILY_GOAL, fill: "hsl(var(--primary))" },
  ];

  return (
    <Card className="flex flex-col transition-all hover:shadow-2xl shadow-md">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-xl">Daily Step Counter</CardTitle>
        <CardDescription className="text-xs">
          {" "}
          Today&apos;s Progress
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={endAngle}
            innerRadius={80}
            outerRadius={120}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="steps" background cornerRadius={30} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 20}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {chartData[0].steps.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 10}
                          className="fill-muted-foreground text-sm"
                        >
                          Of {chartData[0].total.toLocaleString()} steps
                        </tspan>
                        {/* <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 35}
                          className="fill-muted-foreground text-sm"
                        >
                          steps
                        </tspan> */}
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-4 pt-6">
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={() => addStepsCount(-1000)}
            disabled={stepsToTake === 0}
          >
            <Minus />
            <span className="sr-only">Decrease</span>
          </Button>
          <div className="flex-1 text-center pt-2">
            <div className="text-2xl font-bold tracking-tighter">
              {stepsToTake}
            </div>
            <div className="text-[0.70rem] uppercase text-muted-foreground">
              steps
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={() => addStepsCount(1000)}
            disabled={stepsToTake === DAILY_GOAL}
          >
            <Plus />
            <span className="sr-only">Increase</span>
          </Button>
          <Button
            onClick={resetSteps}
            variant="outline"
            size="icon"
            className="shrink-0"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* <div className="flex items-center justify-between w-full gap-2 mt-5">
          <Button
            onClick={addStepsCount}
            className="flex-1"
            disabled={stepsToTake >= DAILY_GOAL}
          >
            <Droplets className="h-4 w-4 mr-2" />
            Add {INCREMENT} steps
          </Button>
          <Button
            onClick={resetWater}
            variant="outline"
            size="icon"
            className="shrink-0"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div> */}
        <div className="text-sm text-muted-foreground text-center">
          {stepsToTake < DAILY_GOAL
            ? `${DAILY_GOAL - stepsToTake} steps remaining`
            : "Daily goal achieved! 🎉"}
        </div>
      </CardFooter>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {completionPercentage.toFixed(1)}% of daily goal completed
          <Footprints className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Keep going! You&apos;re making great progress.
        </div>
      </CardFooter> */}
    </Card>
  );
}
