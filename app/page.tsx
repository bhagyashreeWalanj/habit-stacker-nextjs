import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import "./home.css";
import Link from "next/link";

import LogoAndName from "./components/LogoAndName";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between px-6 mb-5 bg-white">
        <LogoAndName />

        <div className="p-10 border-b border-[#F2F2F2]">
          <div className="relative flex gap-3">
            <SignedIn>
              <Link
                href="/dashboard"
                className="block bg-primary sm:w-32 w-full rounded-lg  px-9 py-3 text-sm font-medium text-white transition   focus:outline-none  "
              >
                Dashboard
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="block bg-primary sm:w-32 w-full rounded-lg  px-9 py-3 text-sm font-medium text-white transition   focus:outline-none">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </nav>

      <Hero />
    </>
  );
}
