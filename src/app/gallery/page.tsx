"use client";

import Image from "next/image";
import { useState } from "react";
import { triggerEnquiry } from "@/components/EnquiryModal";

const galleryCategories = [
  "All",
  "Uniforms",
  "Safety Equipment",
  "Corporate Apparel",
  "Cleaning Machines",
  "Branding & Printing",
];

const galleryItems = [
  {
    title: "Executive Corporate Uniform",
    category: "Corporate Apparel",
    code: "JC-GAL-01",
    image: "/gallery/uniform-1.jpeg",
    desc: "Premium customized corporate uniforms tailored for professional workplaces.",
  },
  {
    title: "Industrial Boiler Suit",
    category: "Uniforms",
    code: "JC-GAL-02",
    image: "/gallery/uniform-2.jpeg",
    desc: "Durable industrial boiler suits with high-quality stitching and comfort.",
  },
  {
    title: "Safety Helmet",
    category: "Safety Equipment",
    code: "JC-GAL-03",
    image: "/gallery/uniform-3.jpeg",
    desc: "ISI-certified industrial safety helmets for construction and manufacturing.",
  },
  {
    title: "Floor Scrubber Machine",
    category: "Cleaning Machines",
    code: "JC-GAL-04",
    image: "/gallery/uniform-4.jpeg",
    desc: "Heavy-duty floor scrubber for factories, warehouses, and commercial spaces.",
  },
  {
    title: "Security Guard Uniform",
    category: "Uniforms",
    code: "JC-GAL-05",
    image: "/gallery/uniform-5.jpeg",
    desc: "Professional security uniforms designed for durability and comfort.",
  },
  {
    title: "Custom Polo T-Shirt",
    category: "Corporate Apparel",
    code: "JC-GAL-06",
    image: "/gallery/uniform-6.jpeg",
    desc: "Branded polo T-shirts with embroidery or printing for corporate teams.",
  },
  {
    title: "Reflective Safety Jacket",
    category: "Safety Equipment",
    code: "JC-GAL-07",
    image: "/gallery/uniform-1.jpeg",
    desc: "High-visibility reflective jackets for industrial and road safety.",
  },
  {
    title: "Industrial Safety Shoes",
    category: "Safety Equipment",
    code: "JC-GAL-08",
    image: "/gallery/uniform-2.jpeg",
    desc: "Steel-toe safety shoes providing maximum workplace protection.",
  },
  {
    title: "Wet & Dry Vacuum Cleaner",
    category: "Cleaning Machines",
    code: "JC-GAL-09",
    image: "/gallery/uniform-3.jpeg",
    desc: "Industrial vacuum cleaner for efficient wet and dry cleaning operations.",
  },
  {
    title: "Cut Resistant Gloves",
    category: "Safety Equipment",
    code: "JC-GAL-10",
    image: "/gallery/uniform-4.jpeg",
    desc: "Protective gloves engineered for heavy-duty industrial applications.",
  },
  {
    title: "Custom Logo Embroidery",
    category: "Branding & Printing",
    code: "JC-GAL-11",
    image: "/gallery/uniform-5.jpeg",
    desc: "Computerized logo embroidery with premium thread quality and finish.",
  },
  {
    title: "Custom Printed Uniforms",
    category: "Branding & Printing",
    code: "JC-GAL-12",
    image: "/gallery/uniform-6.jpeg",
    desc: "High-quality screen and digital printing for uniforms and promotional apparel.",
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <main className="flex flex-col gap-14 overflow-hidden py-10">
      {/* Header */}
      <section className="relative border-b border-card-border bg-bg-subtle py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Showcase Room
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
            Our Project Gallery
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-text-muted">
            Explore our premium range of industrial uniforms, corporate
            apparel, PPE equipment, cleaning machines and customized branding
            solutions delivered for businesses across India.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                activeTab === cat
                  ? "bg-accent text-white shadow-lg"
                  : "border border-card-border bg-bg-subtle text-foreground hover:border-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

       {filteredItems.map((item, index) => (
  <div
    key={index}
    className="group overflow-hidden rounded-3xl border border-card-border bg-card-bg shadow-sm transition-all duration-500 hover:shadow-2xl"
  >
    {/* Image */}
    <div className="relative aspect-square overflow-hidden">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <span className="absolute left-4 top-4 rounded-full bg-[#0F2247] px-3 py-1 text-[10px] font-bold text-white">
        {item.category}
      </span>

      <span className="absolute right-4 top-4 rounded bg-white px-2 py-1 text-[10px] font-bold text-[#0F2247]">
        {item.code}
      </span>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-lg font-extrabold text-foreground transition group-hover:text-accent">
        {item.title}
      </h3>

      <p className="mt-3 text-xs leading-relaxed text-text-muted">
        {item.desc}
      </p>

      <button
        onClick={() =>
          triggerEnquiry({
            product: `${item.title} (${item.code})`,
          })
        }
        className="mt-5 w-full rounded-xl border border-card-border py-3 text-xs font-bold text-text-muted transition hover:border-accent hover:bg-accent hover:text-white"
      >
        Enquire Quote
      </button>
    </div>
  </div>
))}

</div>
</section>

{/* CTA */}

<section className="mx-auto w-full max-w-4xl px-6 pb-10">
  <div className="rounded-3xl border border-card-border bg-bg-subtle p-10 text-center">
    <h2 className="text-2xl font-bold text-foreground">
      Need Custom Manufacturing?
    </h2>

    <p className="mt-3 text-sm text-text-muted">
      Share your design, logo or product requirements. Our team will create a
      customized bulk solution for your business.
    </p>

    <button
      onClick={() => triggerEnquiry()}
      className="mt-6 rounded-xl bg-accent px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
    >
      Request Consultation
    </button>
  </div>
</section>

</main>
);
}