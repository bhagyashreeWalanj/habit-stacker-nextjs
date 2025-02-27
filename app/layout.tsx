import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import GlobalContextProvider from "./types/contextApi";
import { ThemeProvider } from "./theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://clerk-next-app.vercel.app/"),
  title: "Habit Stacker",
  description:
    "A simple and powerful Next.js Habit tracker featuring authentication and habit management.",
};

const fontPoppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <GlobalContextProvider>
          <body
            className={cn(
              "min-h-screen --font-poppins antialiased ",
              fontPoppins.variable
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="light">
              {children}
              <Toaster />
            </ThemeProvider>
          </body>
        </GlobalContextProvider>
      </html>
    </ClerkProvider>
  );
}
