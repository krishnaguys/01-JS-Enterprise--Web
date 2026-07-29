"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import AnnouncementBar from "../AnnouncementBar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-xl dark:border-gray-800 dark:bg-slate-950/90">

      {/* Navigation */}
      <nav className="mx-auto flex h-16 md:h-20 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 min-w-0"
        >
          <Image
            src="/logo.svg"
            alt="JC Enterprises Logo"
            width={60}
            height={60}
            priority
            className="h-10 w-10 md:h-14 md:w-14 flex-shrink-0"
          />

          <div className="min-w-0">
            <h1 className="truncate text-base md:text-2xl font-bold leading-tight text-foreground">
              JC Enterprises
            </h1>

            <p className="hidden lg:block text-sm text-muted-foreground">
              Industrial Uniforms & Safety Solutions
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[15px] font-semibold tracking-wide text-gray-700 transition-all duration-300 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-4">

          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 transition hover:bg-gray-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-slate-950 lg:hidden"
          >
            <div className="flex flex-col px-5 py-5">

              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="mb-2 block rounded-xl px-4 py-3 text-base font-semibold tracking-wide text-gray-700 transition-all duration-300 hover:bg-orange-500 hover:text-white dark:text-gray-200 dark:hover:bg-orange-500 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Announcement Bar */}
      <AnnouncementBar />

    </header>
  );
}