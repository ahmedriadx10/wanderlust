import { SignUpForm } from "@/components/client-components/SignUpForm";
import { Button, Separator, SeparatorRoot } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignupPage = () => {
  return (
    <section>
      <div className="text-center space-y-5 mx-auto">
        <h2 className="text-4xl">Create Account</h2>
        <p className="text-(--primaryText) text-xl">
          Start your adventure with Wanderlust
        </p>
      </div>

      <div className=" my-15 max-w-xl mx-auto w-[90%] shadow border border-zinc-200 rounded-none p-5">
        <SignUpForm />

        <div className="flex items-center gap-4 my-4">
          <div className="flex-1 h-px bg-zinc-200" />
          <p className="text-sm sm:text-base text-zinc-500">Or sign up with</p>
          <div className="flex-1 h-px bg-zinc-200" />
        </div>

        <div className="flex flex-col gap-4">
          <Button variant="outline" fullWidth className={"rounded-none"}>
            <FcGoogle /> Sign Up With Google
          </Button>
          <p className="text-center">
            Already have an account?{" "}
            <Link
              className="text-(--primaryBlue) font-semibold"
              href={"/login"}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
