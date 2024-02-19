"use client";

import { LucideIcon } from "lucide-react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const SidebarItem = ({
  route,
}: {
  route: { icon: LucideIcon; href: string; label: string };
}) => {
  const path_name = usePathname();
  const router = useRouter();
  let Icon = route.icon;

  const isActive =
    (path_name === "/" && route.href === "/") ||
    path_name === route.href ||
    path_name.startsWith(`${route.href}/`);

  const onClick = () => router.push(route.href);

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {route.label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      ></div>
    </button>
  );
};

export default SidebarItem;
