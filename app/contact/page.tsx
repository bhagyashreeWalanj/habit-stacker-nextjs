import { Card, CardContent } from "@/components/ui/card";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-16">
            {/* Header Section */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight tracking-tighter text-gray-900">
                Love to hear from you,
                <br />
                Get in touch
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Send us a message and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Information Grid */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {/* USA Office Hours */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Email ID
                </h3>
                <div>
                  <p className=" text-gray-900">shree.6490@gmail.com</p>
                  {/* <p className="text-gray-600">8:00 am to 5:00 pm</p> */}
                </div>
              </div>

              {/* Our Address */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  GitHub
                </h3>
                <div>
                  <Link
                    href="https://github.com/bhagyashreeWalanj"
                    target="_blank"
                    className="text-gray-600 hover:underline my-3 decoration-gray-600 decoration-2 transition-all"
                  >
                    https://github.com/bhagyashreeWalanj
                  </Link>
                </div>
              </div>

              {/* Get in Touch */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  GET IN TOUCH
                </h3>
                <div className="space-y-2">
                  <Link
                    href="https://www.linkedin.com/in/bhagyashreewalanj6490/"
                    target="_blank"
                    className="text-gray-600 hover:underline my-3 decoration-gray-600 decoration-2 transition-all"
                  >
                    https://www.linkedin.com/in/bhagyashreewalanj6490/
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                PORTFOLIO
              </h3>
              <div>
                <Link
                  href="https://github.com/bhagyashreeWalanj"
                  target="_blank"
                  className="text-gray-600 hover:underline my-3 decoration-gray-600 decoration-2 transition-all"
                >
                  https://portfolio-2024-bhagyashree.vercel.app/
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                width={500}
                height={500}
                src="/assets/contactForm.png"
                alt="Business professional on phone"
                className=" object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
