import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import Link from "next/link";

import LogoAndName from "./components/LogoAndName";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between px-6 mb-5 bg-white">
        <LogoAndName />

        <div className="p-10">
          <div className="relative flex gap-2">
            <SignedIn>
              <Link
                href="/dashboard"
                className="block bg-primary sm:w-32 w-full text-center rounded-lg px-0 py-3 text-md font-medium text-white   "
              >
                Dashboard
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="block bg-primary sm:w-32 w-full rounded-lg  px-0 py-3 text-sm font-medium text-white transition   focus:outline-none">
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
