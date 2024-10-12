"use client";

import { cn } from "@/lib/utils";
import { Compass, Layout } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

interface Route {
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

const SidebarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div>
      {guest_routes?.map((route: Route) => {
        const isActive =
          (pathname === "/" && route.route === "/") ||
          pathname === route.route ||
          pathname.startsWith(`${route.route}/`);
        return (
          <div key={route.label} className="w-full flex flex-col">
            <button
              onClick={() => router.push(route.route)}
              className={cn(
                "flex items-center flex-row gap-x-2 text-slate-500 text-base pl-6 transition-all font-[500] hover:text-slate-700 hover:bg-slate-300/20",
                isActive &&
                  "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700  border-r-4 border-sky-500"
              )}
            >
              <div className="flex items-center gap-x-2 py-4">
                <route.icon size="22px" />
                <p>{route.label}</p>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarRoutes;
