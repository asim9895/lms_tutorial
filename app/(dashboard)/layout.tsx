import React from "react";
import SideBar from "./_components/sidebar";
import Navbar from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 w-full fixed inset-y-0 z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 inset-y-0 flex-col fixed z-50">
        <SideBar />
      </div>
      <div className="md:pl-56 pt-20 h-full w-full bg-[#f1efe7]">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
