import React from "react";
import SideBar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-56 inset-y-0 flex-col fixed z-50">
        <SideBar />
      </div>
      <div className="md:pl-56 h-full w-full bg-[#f1efe7]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
