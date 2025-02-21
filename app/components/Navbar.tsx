"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import LogoAndName from "./LogoAndName";

const Navbar = () => {
  async function user() {
    const { userId, redirectToSignIn } = await auth();

    if (!userId) return redirectToSignIn();
  }
  const [userId, setUserId] = useState<any>();

  useEffect(() => {
    const userDetails = user();
    setUserId(userDetails);
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 mb-5 bg-blue-700">
      <div className="flex items-center">
        <Link href="/">
          <LogoAndName />
        </Link>
      </div>
      <div className="flex items-center text-white">
        {!userId && (
          <>
            <Link
              href="sign-in"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign In
            </Link>
            <Link
              href="sign-up"
              className="block sm:w-32 w-full border rounded-lg  px-9 py-3 text-sm font-medium   transition   
              focus:outline-none hover:bg-primary hover:text-white  border-customRed text-customRed "
            >
              Sign Up
            </Link>
          </>
        )}
        {userId && (
          <Link href="profile" className="text-gray-300 hover:text-white mr-4">
            Profile
          </Link>
        )}
        <div className="ml-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
