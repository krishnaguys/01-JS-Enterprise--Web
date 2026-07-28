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
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Company Info */}

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {SITE_NAME}
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
              Manufacturer & Supplier of Industrial Uniforms,
              Corporate Uniforms, PPE Equipment, Safety Shoes,
              Cleaning Machines and Housekeeping Products.
            </p>
          </div>

          {/* Company */}

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
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
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Products
            </h4>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/products/corporate-uniforms" className="hover:text-red-600">
                  Corporate Uniforms
                </Link>
              </li>

              <li>
                <Link href="/products/industrial-uniforms" className="hover:text-red-600">
                  Industrial Uniforms
                </Link>
              </li>

              <li>
                <Link href="/products/ppe-equipment" className="hover:text-red-600">
                  PPE Equipment
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-red-600">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h4>

            <ul className="space-y-4 text-gray-600 dark:text-gray-400">

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-red-600" />
                <span>+91-8208935819</span>
              </li>

               <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-red-600" />
                <span>+91-9822062288</span>
              </li>

              

              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-red-600" />
                <span>jayseeenterprises@gmail.com</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-red-600" />
                <span>
                  Bhubaneswar,
                  <br />
                  Odisha, India
                </span>
              </li>

            </ul>

            <div className="flex gap-4 mt-6">

              <a
                href="https://www.facebook.com/j.c.enterprises.3007/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <Facebook />
              </a>

              <a
                href="https://www.instagram.com/j.c.uniforms/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <Instagram />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800">

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
           © {new Date().getFullYear()} JC Enterprises. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}