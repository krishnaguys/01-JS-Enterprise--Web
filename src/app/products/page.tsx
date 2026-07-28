"use client";
import Link from "next/link";
import {
  Briefcase,
  Shield,
  Wrench,
  Layers,
  Utensils,
  Stethoscope,
  Shirt,
  Footprints,
  ShieldAlert,
  HardHat,
  Hand,
  CloudRain,
  Snowflake,
  Sparkles,
  ChevronRight,
  PhoneCall,
} from "lucide-react";
import { triggerEnquiry } from "@/components/EnquiryModal";
// The 14 Product Categories required by the user
const categoriesList = [
  {
    id: "corporate-uniforms",
    name: "Corporate Uniforms",
    desc: "Executive blazers, formal shirts, business trousers, skirts, and tailored waistcoats for office staff.",
    icon: Briefcase,
    count: "35+ Items",
    tag: "Office Wear",
  },
  {
    id: "security-uniforms",
    name: "Security Uniforms",
    desc: "Durable guard uniforms, guard shirts, tactical trousers, web belts, guard caps, and high-visibility patrol wear.",
    icon: Shield,
    count: "20+ Items",
    tag: "Protection",
  },
  {
    id: "industrial-uniforms",
    name: "Industrial Uniforms",
    desc: "Flame retardant (FR) coveralls, high-vis safety shirts, cargo trousers, and chemical-resistant boiler suits.",
    icon: Wrench,
    count: "50+ Items",
    tag: "Heavy Work",
  },
  {
    id: "housekeeping-uniforms",
    name: "Housekeeping Uniforms",
    desc: "Clean-fit tunics, housekeeping pants, aprons, utility belts, and durable dust jackets for facility staff.",
    icon: Layers,
    count: "24+ Items",
    tag: "Facility",
  },
  {
    id: "chef-uniforms",
    name: "Chef Uniforms",
    desc: "Breathable double-breasted chef coats, kitchen trousers, food preparation aprons, and chef caps.",
    icon: Utensils,
    count: "18+ Items",
    tag: "Hospitality",
  },
  {
    id: "medical-uniforms",
    name: "Medical Uniforms",
    desc: "Antimicrobial doctor coats, nursing scrubs, patient gowns, laboratory aprons, and surgical wear.",
    icon: Stethoscope,
    count: "30+ Items",
    tag: "Healthcare",
  },
  {
    id: "customized-t-shirts",
    name: "Customized T-Shirts",
    desc: "Premium polo t-shirts, promotional round neck t-shirts, customized colors, screen prints, and embroidery.",
    icon: Shirt,
    count: "40+ Items",
    tag: "Branding",
  },
  {
    id: "safety-shoes",
    name: "Safety Shoes",
    desc: "Composite steel-toe shoes, oil-resistant rubber soles, anti-slip boots, and electrical hazard safety footwear.",
    icon: Footprints,
    count: "25+ Items",
    tag: "Foot Protection",
  },
  {
    id: "ppe-equipment",
    name: "PPE Equipment",
    desc: "Safety goggles, protective face shields, bio-overalls, disposable gowns, and breathing respirators.",
    icon: ShieldAlert,
    count: "15+ Items",
    tag: "Bio-Safety",
  },
  {
    id: "helmets",
    name: "Helmets",
    desc: "Industrial safety helmets (Class A & B), construction hard hats, adjustable ratchet bands, and chinstraps.",
    icon: HardHat,
    count: "12+ Items",
    tag: "Head Protection",
  },
  {
    id: "gloves",
    name: "Gloves",
    desc: "Nitrial gloves, leather welder gloves, cut-resistant gloves, chemical gloves, and thermal grip gloves.",
    icon: Hand,
    count: "22+ Items",
    tag: "Hand Safety",
  },
  {
    id: "rainwear",
    name: "Rainwear",
    desc: "Industrial double-stichted raincoats, heavy-duty PVC rain suits, and high-visibility reflex rain jackets.",
    icon: CloudRain,
    count: "10+ Items",
    tag: "Weatherproof",
  },
  {
    id: "winter-wear",
    name: "Winter Wear",
    desc: "Thermal jackets, industrial windbreakers, fleece-lined safety parkas, and high-visibility corporate sweaters.",
    icon: Snowflake,
    count: "15+ Items",
    tag: "Thermal Guard",
  },
  {
    id: "cleaning-machines",
    name: "Cleaning Machines",
    desc: "Walk-behind scrubber dryers, industrial wet/dry vacuum cleaners, sweepers, and steam cleaners.",
    icon: Sparkles,
    count: "18+ Items",
    tag: "Industrial Cleaning",
  },
];
export default function Products() {
  return (
    <div className="flex flex-col gap-20 py-10 overflow-hidden">
      
      {/* Banner */}
      <section className="relative bg-bg-subtle border-b border-card-border py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            B2B Sourcing
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F2247] dark:text-white mt-3">
            Our Product Categories
          </h1>
          <p className="text-text-muted text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive range of 14 categories. We support fully customized stitching runs, sizing validations, corporate logo embroidery, and PAN India supply chains.
          </p>
        </div>
      </section>
      {/* Grid List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesList.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-card-bg border border-card-border p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-bg-subtle border border-card-border flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-bg-subtle text-text-muted border border-card-border rounded-lg uppercase">
                        {cat.tag}
                      </span>
                      <span className="text-[10px] font-semibold text-accent">
                        {cat.count}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-text-muted text-xs leading-relaxed mb-8">
                    {cat.desc}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/products/${cat.id}`}
                    className="flex-grow flex items-center justify-center gap-1 py-3 bg-bg-subtle border border-card-border rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    View Catalog
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => triggerEnquiry({ category: cat.name })}
                    className="px-5 py-3 bg-accent hover:bg-red-650 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Quote Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#0F2247] rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--accent)_10%,transparent_80%)] opacity-20" />
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Need Customized Fabric Combinations or Color Matching?
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Our fabric testing team matches exact color shades, GSM density, and weave structures according to your brand guidelines.
            </p>
          </div>
          <button
            onClick={() => triggerEnquiry()}
            className="relative z-10 flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-red-600 text-white font-bold rounded-xl shadow-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
          >
            <PhoneCall className="w-4 h-4" />
            Talk Sourcing Specialist
          </button>
        </div>
      </section>
    </div>
  );
}
