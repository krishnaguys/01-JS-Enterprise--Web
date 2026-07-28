"use client";
import {
  Wrench,
  Building2,
  Briefcase,
  Stethoscope,
  Hotel,
  GraduationCap,
  ShieldCheck,
  Layers,
  Package,
  Users,
  Check,
} from "lucide-react";
import { triggerEnquiry } from "@/components/EnquiryModal";
// 10 Industries specified by the user
const industriesList = [
  {
    name: "Manufacturing",
    icon: Wrench,
    desc: "Heavy industries, steel mills, automobile plants, assembly units, and chemicals.",
    supplies: ["Flame-Retardant Boiler Suits", "Steel-Toe Safety Shoes", "Heavy Welder Gloves", "High-Vis Safety Shirts"],
  },
  {
    name: "Construction",
    icon: Building2,
    desc: "Infrastructure plants, civil projects, real estate builders, and masonry sites.",
    supplies: ["Certified Safety Helmets", "High-Visibility Vest Jackets", "Ankle-Support boots", "Protective Raincoats"],
  },
  {
    name: "Corporate Offices",
    icon: Briefcase,
    desc: "Multinational companies, banks, sales agencies, and reception management.",
    supplies: ["Tailored Formal Blazers", "Executive Oxford Shirts", "Flat-Front Formal Trousers", "Corporate Waistcoats"],
  },
  {
    name: "Hospitals",
    icon: Stethoscope,
    desc: "Multi-specialty clinics, healthcare systems, diagnostic labs, and nurse staffs.",
    supplies: ["Antibacterial Medical Scrubs", "Doctor White Lab Coats", "Patient Isolation Gowns", "Surgical Hand Gloves"],
  },
  {
    name: "Hotels",
    icon: Hotel,
    desc: "Fine dining restaurants, chains, hotel staffs, resort facilities, and chefs.",
    supplies: ["Double-Breasted Chef Coats", "Kitchen Checkerboard Pants", "Waiter Uniform Sets", "Housekeeping Tunics"],
  },
  {
    name: "Educational Institutions",
    icon: GraduationCap,
    desc: "Schools, universities, research labs, support staff, and administrative teams.",
    supplies: ["Student Uniform Sets", "Lab Protective Aprons", "Support Crew Shirts", "Security Guard Sets"],
  },
  {
    name: "Security Agencies",
    icon: ShieldCheck,
    desc: "Private security guards, event safety, bodyguards, and patrol services.",
    supplies: ["Patrol Officer Shirts", "Tactical Cargo Pants", "Guard Caps & Belts", "Ceremonial Guards Wear"],
  },
  {
    name: "Facility Management",
    icon: Layers,
    desc: "Cleaning agencies, maintenance contractors, facility engineers, and technicians.",
    supplies: ["Housekeeping Tunic Sets", "Utility Cargo Trousers", "Aprons & Staff Jackets", "Scrubber Dryer Machinery"],
  },
  {
    name: "Warehouses",
    icon: Package,
    desc: "Logistics parks, fulfillment centers, courier agents, and packing staff.",
    supplies: ["Anti-skid Working Shoes", "High-Vis Waistcoats", "Thermal Winter Parkas", "Durable Work trousers"],
  },
  {
    name: "Retail",
    icon: Users,
    desc: "Supermarkets, hypermarkets, mall counters, delivery partners, and sales reps.",
    supplies: ["HD Woven Polo T-Shirts", "Promotional Round Neck Shirts", "Cashier Shirts & Aprons", "Reflector Vests"],
  },
];
export default function Industries() {
  return (
    <div className="flex flex-col gap-20 py-10 overflow-hidden">
      
      {/* Banner */}
      <section className="relative bg-bg-subtle border-b border-card-border py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Workforce Coverage
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F2247] dark:text-white mt-3">
            Industries We Serve
          </h1>
          <p className="text-text-muted text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            JC Enterprises supplies compliant, high-quality corporate wear and certified safety gears tailored to the regulatory mandates of multiple B2B sectors.
          </p>
        </div>
      </section>
      {/* Modern Grid List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesList.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-card-bg border border-card-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-bg-subtle border border-card-border flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {ind.name}
                    </h2>
                  </div>
                  
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                  <div className="border-t border-card-border pt-4 mb-8">
                    <span className="text-xs font-bold text-foreground uppercase block mb-3">
                      Key Supplies List:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-muted">
                      {ind.supplies.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex justify-end pt-4 border-t border-card-border/40">
                  <button
                    onClick={() => triggerEnquiry({ category: `${ind.name} Sector Sourcing` })}
                    className="px-6 py-2.5 bg-accent hover:bg-red-650 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Enquire for {ind.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Customization Sourcing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#0F2247] rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--accent)_10%,transparent_80%)] opacity-20" />
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Looking for Multiple Plant Deployments?
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              We handle decentralized supply logistics, coordinating batch sizing runs across separate regional factory hubs and project sites.
            </p>
          </div>
          <button
            onClick={() => triggerEnquiry()}
            className="relative z-10 px-6 py-3.5 bg-accent hover:bg-red-600 text-white font-bold rounded-xl shadow-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
          >
            Start Corporate Sourcing
          </button>
        </div>
      </section>
    </div>
  );
}
