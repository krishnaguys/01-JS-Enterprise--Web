"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-500">

      {/* Premium Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Grid Pattern */}

        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-8 xl:px-10 pt-8 pb-8 lg:pt-10 lg:pb-10">

        <div className="grid min-h-[70vh] items-center gap-10 lg:grid-cols-[1fr_1.25fr]">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-orange-500 backdrop-blur-md">

              Since 2018 • Trusted Industrial Partner

            </span>

            {/* Heading */}

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl xl:text-7xl">

              Premium Industrial

              <br />

              Uniforms &

              <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 bg-clip-text text-transparent">

                Safety Solutions

              </span>

            </h1>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">

              JC Enterprises manufactures premium industrial uniforms,
              corporate uniforms, PPE kits, safety equipment, and
              customized workwear for factories, hospitals,
              educational institutions, and businesses across India.

            </p>

            {/* CTA Buttons */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >

                Request Quote

                <ArrowRight className="ml-2 h-5 w-5" />

              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background/70 px-7 py-3.5 font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
              >

                Explore Products

              </Link>

            </div>

            {/* Trust Features */}

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4 text-sm font-medium text-muted-foreground">

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-orange-500" />
                Premium Quality
              </div>

              <div className="flex items-center gap-2">
                <Factory className="h-5 w-5 text-orange-500" />
                Bulk Manufacturing
              </div>

              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-orange-500" />
                PAN India Delivery
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-start lg:-ml-5"
          >

            <div className="relative w-full max-w-[1100px] overflow-hidden rounded-3xl">

              {/* Decorative Glow */}

              <div className="absolute inset-0 scale-105 rounded-3xl bg-gradient-to-br from-orange-500/15 via-transparent to-blue-500/10 blur-[80px]" />

              {/* Hero Image */}

              <Image
                src="/hero-industrial.webp"
                alt="JC Enterprises Industrial Uniform Manufacturing"
                width={900}
                height={1000}
                priority
                quality={80}
                className="w-full rounded-3xl object-cover"
              />

              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-background/20 via-transparent to-background/20" />

              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-background/15 via-transparent to-background/25" />
              {/* CLIENTS CARD */}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-3 top-4 sm:left-5 sm:top-8 md:left-6 md:top-10 lg:left-0 lg:top-12 z-20 rounded-xl md:rounded-2xl border border-white/20 bg-background/70 backdrop-blur-2xl shadow-2xl px-3 py-2 md:px-5 md:py-3"
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500">
                  500+
                </p>

                <p className="mt-1 text-[10px] sm:text-xs md:text-sm leading-tight text-muted-foreground">
                  Happy Business
                  <br />
                  Clients
                </p>
              </motion.div>

              {/* EXPERIENCE CARD */}

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-3 bottom-4 sm:right-5 sm:bottom-8 md:right-6 md:bottom-10 lg:right-0 lg:bottom-10 z-20 rounded-xl md:rounded-2xl border border-border bg-background/80 backdrop-blur-2xl shadow-2xl px-3 py-2 md:px-5 md:py-3"
              >
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-500">
                  Since 2018
                </p>

                <p className="mt-1 text-[10px] sm:text-xs md:text-sm leading-tight text-muted-foreground">
                  Manufacturing
                  <br />
                  Excellence
                </p>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Gradient Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-24 md:h-32 w-full bg-gradient-to-t from-background via-background/60 to-transparent" />

    </section>
  );
}