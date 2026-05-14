"use client";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

import { authClient } from "@/lib/auth-client";


import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";

import MobileNavlink from "../ui/MobileNavlink";
import toast from "react-hot-toast";

export const MobileMenu = () => {
  const [open, isOpen] = useState(false);
  const route = useRouter();
  const {
    data,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const manageMenuBar = () => {
    isOpen(!open);
  };

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          route.refresh("/");
         toast.success('Sign out Succesfull')

        },
      },
    });
  };

  return (
    <div>
      <FaBarsStaggered
        className="text-2xl cursor-pointer"
        onClick={manageMenuBar}
      />

      {/* controled menu items */}
      <div
        className={`absolute z-10 bg-white ${open ? "top-18 right-5 visible" : "right-350 invisible"}   shadow rounded-lg p-2.5 w-40`}
      >
        <ul className="space-y-1">
          <li className="border-b pb-1 border-zinc-300">
            <MobileNavlink href={"/"}>Home</MobileNavlink>
          </li>
          <li className="border-b pb-1 border-zinc-300">
            <MobileNavlink href={"/destinations"}>Destinations</MobileNavlink>
          </li>
          <li className="border-b pb-1 border-zinc-300">
            <MobileNavlink href={"/my-bookings"}>My Bookings</MobileNavlink>
          </li>
          <li className="border-b pb-1 border-zinc-300">
            <MobileNavlink href={"/new-destination"}>New Destination</MobileNavlink>
          </li>
          <li className="border-b pb-1 border-zinc-300">
            <MobileNavlink href={"/profile"}>Profile</MobileNavlink>
          </li>
          {data?.user ? (
            <li>
              <button
                className="inline-flex text-red-500 gap-1 items-center cursor-pointer"
                onClick={handleLogOut}
              >
                <MdLogout /> Log out
              </button>
            </li>
          ) : (
            <>
              <li>
                <MobileNavlink href={"/login"}>Log in</MobileNavlink>
              </li>
              <li>
                <MobileNavlink href={"/signup"}>Sign up</MobileNavlink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
