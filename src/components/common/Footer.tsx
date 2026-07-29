import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">

          {/* Company Info */}
          <div>

            <Image
              src="/logo-footer.png"
              alt={SITE_NAME}
              width={280}
              height={75}
              className="w-64 md:w-72 h-auto object-contain"
              priority={false}
            />

            <p className="mt-6 max-w-md leading-7 text-gray-600 dark:text-gray-400">
              Manufacturer & Supplier of Industrial Uniforms, Corporate
              Uniforms, PPE Equipment, Safety Shoes, Cleaning Machines and
              Housekeeping Products.
            </p>

          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Company
            </h4>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-red-600">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-red-600">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/industries" className="hover:text-red-600">
                  Industries
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-red-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Products
            </h4>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/products/corporate-uniforms"
                  className="hover:text-red-600"
                >
                  Corporate Uniforms
                </Link>
              </li>

              <li>
                <Link
                  href="/products/industrial-uniforms"
                  className="hover:text-red-600"
                >
                  Industrial Uniforms
                </Link>
              </li>

              <li>
                <Link
                  href="/products/ppe-equipment"
                  className="hover:text-red-600"
                >
                  PPE Equipment
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-red-600"
                >
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Contact
            </h4>

            <ul className="space-y-4 text-gray-600 dark:text-gray-400">

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-red-600" />
                <span>+91 8208935819</span>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-red-600" />
                <span>+91 9822062288</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-red-600" />
                <span>jayseeenterprises@gmail.com</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-red-600" />
                <span>
                  Bhubaneswar
                  <br />
                  Odisha, India
                </span>
              </li>

            </ul>

            <div className="mt-6 flex gap-4">

              <a
                href="https://www.facebook.com/j.c.enterprises.3007/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-red-600"
              >
                <Facebook />
              </a>

              <a
                href="https://www.instagram.com/j.c.uniforms/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-red-600"
              >
                <Instagram />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
  <p className="text-sm text-gray-400">
    © {new Date().getFullYear()} JC Enterprises. All rights reserved.
  </p>

  <p className="mt-2 text-sm text-gray-500">
    Handcrafted by{" "}
    <a
      href="https://nectardynamics.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-red-500 transition-colors duration-300 hover:text-red-400"
    >
      Nectar Dynamics
    </a>
  </p>
</div>

      </div>
    </footer>
  );
}