"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import AllHabitsTopbar from "../AllHabits/components/AllHabitsTopbar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-100 dark:text-white">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SidebarProvider className="bg-white dark:bg-darkBackground">
          <AppSidebar />
          <div className="max-lg:flex-col w-full flex flex-row gap-0 bg-white dark:bg-darkBackground">
            <div className="flex-col flex-grow m-3">
              <AllHabitsTopbar />
              {children}
            </div>
          </div>
        </SidebarProvider>
      </LocalizationProvider>
    </div>
  );
}
