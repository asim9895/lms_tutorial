"use client";

import { cn } from "@/lib/utils";
import { BarChart, Compass, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import SidebarItem from "./sidebar-item";

export interface Route {
  label: string;
  route: string;
  icon: React.FC<any>;
}

const guest_routes: Route[] = [
  {
    label: "Dashboard",
    route: "/",
    icon: Layout,
  },
  {
    label: "Browse",
    route: "/browse",
    icon: Compass,
  },
];

const teacher_routes: Route[] = [
  {
    label: "Courses",
    route: "/teacher/courses",
    icon: List,
  },
  {
    label: "Analytics",
    route: "/teacher/analytics",
    icon: BarChart,
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname.includes("/teacher");

  return (
    <div>
      {isTeacherPage ? (
        <div>
          {teacher_routes?.map((route: Route, index: number) => {
            return <SidebarItem route={route} key={index} />;
          })}
        </div>
      ) : (
        <div>
          {guest_routes?.map((route: Route, index: number) => {
            return <SidebarItem route={route} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SidebarRoutes;
