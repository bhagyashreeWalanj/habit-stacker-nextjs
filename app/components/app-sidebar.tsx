"use client";

import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContextProvider } from "../types/contextApi";
import LogoAndName from "./LogoAndName";
import { menuItemType } from "../types/MenuItemType";
import Link from "next/link";
import LogoutSection from "./common/LogoutSection";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems, setMenuItems } = menuItemsObject;
  const pathname = usePathname();
  console.log("pathname", pathname);
  function handleMenuItem(menu: string) {
    const copyMenuItems = menuItems.map((menuItem) => {
      if (menu === menuItem.name) {
        return { ...menuItem, isSelected: true };
      } else {
        return { ...menuItem, isSelected: false };
      }
    });
    setMenuItems(copyMenuItems);
  }

  return (
    <div className="">
      <Sidebar className="max-xl:hidden bg-white dark:bg-darkBackground flex-grow z-50  flex-col transition-all  min-h-screen">
        <SidebarContent className="bg-white dark:bg-darkBackground ">
          <SidebarGroup>
            <SidebarGroupLabel>
              <LogoAndName />
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <div className="mt-[180px]">
                  {menuItems.map((menuItem: menuItemType) => (
                    <React.Fragment key={`${menuItem.id}_${menuItem.name}`}>
                      <Link href={menuItem.url}>
                        <SidebarMenuItem
                          className=""
                          id={`${menuItem.id}_${menuItem.name}`}
                        >
                          <SidebarMenuButton
                            asChild
                            //isActive={pathname === menuItem.url}
                            className={`flex gap-2 items-center p-2 mb-3 w-40 text-center cursor-pointer  select-none rounded-sm ml-8  ${
                              pathname === menuItem.url
                                ? "bg-primary text-white transition-all"
                                : "hover:text-primary"
                            }`}
                          >
                            <div onClick={() => handleMenuItem(menuItem.name)}>
                              <FontAwesomeIcon
                                className=""
                                icon={menuItem.icon}
                                width={20}
                                height={20}
                              />
                              <div className=" font-medium text-base">
                                {menuItem.name}
                              </div>
                            </div>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              </SidebarMenu>

              <LogoutSection />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
