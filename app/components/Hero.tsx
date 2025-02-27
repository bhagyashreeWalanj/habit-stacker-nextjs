"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background max-h-full">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">
              {" "}
              Build the habits that{" "}
              <span className="text-primary">matter!</span>
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Feeling overwhelmed? Our easy-to-use fit tracker helps you take
            control of your day and achieve your goals. Productivity that
            inspire and elevate your space.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white py-3 px-8 rounded-md text-sm font-semibold"
            >
              Explore My Work
            </a>
            {/* <a
              href="https://www.flowersandsaints.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-foreground"
            >
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <img
              src="/assets/hero.png"
              alt="Flowers & Saints design concept"
              width={800}
              height={800}
              className=" rounded-2xl "
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
