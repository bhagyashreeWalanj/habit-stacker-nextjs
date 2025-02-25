import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import Topbar from "../components/common/Topbar";

export default function statisticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-100 dark:text-white">
      <SidebarProvider className="bg-white dark:bg-darkBackground">
        <AppSidebar />
        <div className="max-lg:flex-col w-full flex flex-row gap-0 bg-white dark:bg-darkBackground">
          <div className="flex-col flex-grow m-3">
            <Topbar
              title="Statistics"
              description={"Track your progress and maintain your streaks"}
            />
            {children}
          </div>
        </div>
        {/* <BlackSoftLayer /> */}
      </SidebarProvider>
    </div>
  );
}
