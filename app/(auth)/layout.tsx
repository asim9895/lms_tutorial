import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full w-full bg-[#f1efe7]">{children}</div>;
};

export default AuthLayout;
