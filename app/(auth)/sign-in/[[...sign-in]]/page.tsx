import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="justify-center items-center flex h-full">
      <SignIn />
    </div>
  );
};

export default SignInPage;
