"use client";

import React from "react";
import MobileSidebar from "./mobile-sidebar";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.startsWith("/chapter");

  return (
    <div className="p-4 border-b-2 h-full flex items-center shadow-sm">
      <MobileSidebar />
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isPlayerPage ? (
          <Link
            href="/"
            onClick={() => localStorage.setItem("teacher_mode", "false")}
          >
            <Button
              size={"sm"}
              variant={"ghost"}
              className="hover:bg-sky-200/50 mr-3 mt-[0.15em]"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/teacher/courses">
            <Button
              onClick={() => localStorage.setItem("teacher_mode", "true")}
              size={"sm"}
              variant={"ghost"}
              className="hover:bg-sky-200/50 mr-3 mt-[0.15em]"
            >
              Teacher Mode
            </Button>
          </Link>
        )}
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "w-10 h-10", // Custom width and height

              userButtonPopoverActionButton: "text-sky-700", // Custom text color for action buttons
              userPreview: "bg-[#f1efe7] text-sky-700 font-bold",
              userButtonPopoverActionButton__addAccount: "bg-[#f1efe7]",
              userButtonPopoverActionButton__signOut:
                "bg-[#f1efe7] hover:bg-[#f1efe7] hover:text-sky-700",
              userButtonPopoverActionButton__manageAccount:
                "bg-[#f1efe7] hover:bg-[#f1efe7] hover:text-sky-700",
            },
          }}
          afterSignOutUrl="/"
        />
      </div>
    </div>
  );
};

export default Navbar;
