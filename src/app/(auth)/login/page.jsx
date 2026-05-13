'use client'
import { SignInForm } from "@/components/client-components/SignInForm";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {



  const handleSocialSignIn=async()=>{
  
  const soicalSignIn=await authClient.signIn.social({
    provider:'google'
  })
  
  
  }
  return (
    <section>
      <div className="text-center space-y-5 mx-auto">
        <h2 className="text-4xl">Welcome Back</h2>
        <p className="text-(--primaryText) text-xl">
    Resume your adventure with Wanderlust
        </p>
      </div>
      
      <div className=" my-15 max-w-xl mx-auto w-[90%] shadow border border-zinc-200 rounded-none p-5">
        <SignInForm />

        <div className="flex items-center gap-4 my-4">
          <div className="flex-1 h-px bg-zinc-200" />
          <p className="text-sm sm:text-base text-zinc-500">Or continue with</p>
          <div className="flex-1 h-px bg-zinc-200" />
        </div>

        <div className="flex flex-col gap-4 ">
          <Button variant="outline" fullWidth className={"rounded-none"} onPress={handleSocialSignIn}>
            <FcGoogle /> Sign In With Google
          </Button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link
              className="text-(--primaryBlue) font-semibold"
              href={"/signup"}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
