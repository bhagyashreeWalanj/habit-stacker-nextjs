// "use client";

// import React, { useState, useEffect } from "react";
// import { useGlobalContextProvider } from "@/app/types/contextApi";
// import { menuItemType } from "@/app/types/MenuItemType";

// import { MenuOptions } from "@/constants";
// // import { LocalizationProvider } from "@mui/x-date-pickers";
// // import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// import AllHabits from "../AllHabits/AllHabits";

// import { AppSidebar } from "../components/app-sidebar";
// import AllHabitsTopbar from "../AllHabits/components/AllHabitsTopbar";
// import Workout from "../workout/page";

// export default function DashboardPage() {
//   const { menuItemsObject } = useGlobalContextProvider();
//   const { menuItems } = menuItemsObject;
//   const [selectedMenu, setSelectedMenu] = useState<menuItemType | null>();
//   let selectComponent = null;

//   useEffect(() => {
//     const fetchData = () => {
//       // Update the state after the asynchronous operation is complete
//       menuItems.map((singleItem) => {
//         if (singleItem.isSelected) {
//           setSelectedMenu(singleItem);
//         }
//       });
//     };
//     fetchData();
//   }, [menuItems]);

//   switch (selectedMenu?.name) {
//     case MenuOptions.ALL_HABITS:
//       selectComponent = <AllHabits />;
//       break;
//     case MenuOptions.WORKOUT:
//       selectComponent = <Workout />;
//       break;
//     // case MenuOptions.STATISTICS:
//     //   selectComponent = <Statistics />;
//     //   break;
//     // case MenuOptions.AREAS:
//     //   selectComponent = <Areas />;
//     //   break;
//     case "":
//       break;
//   }

//   return (
//     <div className="flex bg-gray-100 dark:text-white">
//       <SidebarProvider className="bg-white dark:bg-darkBackground">
//         <AppSidebar />
//         <div className="max-lg:flex-col w-full flex flex-row gap-0 bg-white dark:bg-darkBackground">
//           <div className="flex-col flex-grow m-3">
//             <AllHabitsTopbar />
//             {selectComponent}
//           </div>
//         </div>
//         {/* <BlackSoftLayer /> */}
//       </SidebarProvider>
//     </div>
//   );
// }
import React from "react";
import AllHabits from "../AllHabits/AllHabits";

const page = () => {
  return (
    <div>
      <AllHabits />
    </div>
  );
};

export default page;
