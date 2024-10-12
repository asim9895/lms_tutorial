import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
