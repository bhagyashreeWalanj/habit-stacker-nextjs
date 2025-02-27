import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const techStack = [
    "Next.js 14",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Clerk Auth",
    "Vercel",
    "FontAwesome icons",
    "next-themes",
    "react-hook-form",
    "framer-motion",
    "recharts",
    "react-calendar-heatmap",
    "date-fns",
  ];

  const keyFeatures = [
    "Habit Tracking & Management",
    "NextJs Server side rendering for improved performance",
    "NextJs Multiple File routing",
    "Responsive UI components built with shadcn/ui and Tailwind CSS",
    "Secure authentication using Clerk Auth",
    "Progress Visualization",
    "Workout Analytics",
    "Type-safe development with TypeScript",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-4 py-12 mx-auto max-w-7xl">
        <div className="space-y-2 text-center">
          <h6 className="text-gray-400 text-base font-normal leading-relaxed">
            About Us
          </h6>
          {/* <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            About
          </h1> */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
            Habit Stacker
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            A comprehensive habit tracking platform designed to help you build
            and maintain positive habits
          </p>
        </div>

        <div className="grid gap-12 mt-12 md:grid-cols-2 md:gap-8 lg:gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Project Overview</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Habit Stacker is a modern web application built to help users
                track and maintain their daily habits with an intuitive
                interface. The application provides comprehensive visual
                feedback and progress tracking, focusing on delivering a
                seamless user experience while maintaining high performance and
                reliability.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faCode}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <h2 className="text-2xl font-bold">Technical Stack</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                {keyFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Future Development</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our roadmap includes exciting features such as:
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-2">
                <li>Admin Dashboard</li>
                <li>Database Implementation</li>
                <li>AI-powered habit recommendations</li>
                <li>Integration with fitness devices</li>
                <li>Fitness Data Add, edit and manage options</li>
                <li>Advanced analytics and insights</li>
              </ul>
            </div>

            <Button className="gap-2">
              <Rocket className="w-4 h-4" />
              Contact Me
            </Button>
          </div>
          <div className="relative order-first md:order-last">
            <div className="sticky top-8 space-y-6">
              <img
                alt=""
                src="/assets/aboutProject.png"
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
          </div>

          {/* <div className="relative order-first md:order-last">
            <div className="sticky top-8 space-y-6">
              <div className="overflow-hidden rounded-lg border bg-background">
                <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
                />
              </div>
               <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg border bg-background">
                  <Image
                    src="/assets/page2.png"
                    alt="Habit Dashboard"
                    width={400}
                    height={300}
                    className="aspect-video object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border bg-background">
                  <Image
                    src="/assets/page3.png"
                    alt="Statistics Dashboard"
                    width={400}
                    height={300}
                    className="aspect-video object-cover"
                  />
                </div>
              </div> 
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
