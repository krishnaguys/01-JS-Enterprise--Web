"use client";

console.log("AnnouncementBar loaded")


import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white">
      <Link
        href="/contact"
        className="block whitespace-nowrap py-2 font-semibold"
      >
        <div className="animate-[marquee_20s_linear_infinite]">
          🎉 FREE Logo Embroidery on Orders Above 100 Uniforms • 🚚 PAN India Delivery • 🏭 Special Pricing for Factories • 📞 Get a FREE Quotation Today • 🎉 FREE Logo Embroidery on Orders Above 100 Uniforms • 🚚 PAN India Delivery • 🏭 Special Pricing for Factories • 📞 Get a FREE Quotation Today
        </div>
      </Link>
    </div>
  );
}