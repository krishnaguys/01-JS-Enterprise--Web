"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import AnnouncementBar from "../AnnouncementBar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/70 dark:bg-slate-950/90 dark:border-gray-800">
      <nav className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-10 xl:px-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="JC Enterprises Logo"
            width={150}
            height={150}
            priority
            className="h-16 w-auto"
          />

          <div>
            <h1 className="text-3xl font-extrabold tracking-wide text-gray-900 dark:text-white">
              JC Enterprises
            </h1>

            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Industrial Uniforms & Safety Solutions
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-12 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-gray-600 transition-colors hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 transition-colors hover:text-orange-500 dark:text-gray-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Announcement Bar */}
      <AnnouncementBar />
    </header>
  );
}