"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Link
                href="/"
                className="flex gap-3 items-center"
                prefetch={false}
              >
                <Image
                  src={"/goal.png"}
                  width={40}
                  height={40}
                  alt="habitStacker"
                />
                <span className="text-primary">Habit Stacker</span>
              </Link>
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
            <Image
              src={"/goal.png"}
              width={80}
              height={80}
              alt="habitStacker"
            />
            <span className="sr-only">Habit Stacker</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold rounded-md px-3 transition-colors"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "flex w-full items-center py-2 text-lg font-semibold rounded-md px-3 transition-colors",
                isActive("/about") && "bg-primary text-white"
              )}
              prefetch={false}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={cn(
                "flex w-full items-center py-2 text-lg font-semibold rounded-md px-3 transition-colors",
                isActive("/contact") && "bg-primary text-white"
              )}
              prefetch={false}
            >
              Contact
            </Link>
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
        </SheetContent>
      </Sheet>
      <Link
        href="/"
        className="mr-6 hidden lg:flex text-center items-center text-xl gap-2"
        prefetch={false}
      >
        <Image src={"/goal.png"} width={50} height={50} alt="habitStacker" />
        <span className="font-bold text-primary dark:text-white">Habit</span>
        <span className="font-bold text-primary dark:text-white">Stacker</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          href="/"
          className={cn(
            "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          )}
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
            isActive("/about")
              ? "bg-primary text-white hover:bg-red-600 hover:text-white"
              : "dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          )}
          prefetch={false}
        >
          About
        </Link>

        <Link
          href="/contact"
          className={cn(
            "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
            isActive("/contact")
              ? "bg-primary text-white hover:bg-red-600 hover:text-white"
              : "dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          )}
          prefetch={false}
        >
          Contact
        </Link>
        <SignedIn>
          <Link
            href="/dashboard"
            className="block bg-primary sm:w-32 w-full text-center rounded-lg px-4 py-2 text-sm font-medium text-white   "
          >
            Dashboard
          </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button className="block bg-primary sm:w-32 w-full rounded-lg text-sm font-medium text-white transition   focus:outline-none">
              Sign in
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="block bg-primary sm:w-32 w-full rounded-lg text-center text-sm font-medium text-white transition   focus:outline-none">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>
      </nav>
    </header>
  );
}
