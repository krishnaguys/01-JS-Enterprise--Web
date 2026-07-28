"use client";
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  Users2,
  TrendingUp,
  Building,
} from "lucide-react";
import { triggerEnquiry } from "@/components/EnquiryModal";
// Core Values List
const values = [
  {
    title: "Quality First",
    desc: "Strict raw material sourcing and double-tier stitching checks ensure garments exceed B2B durability standards.",
    icon: Award,
  },
  {
    title: "Customer Centric",
    desc: "Delivering customized layouts, mock physical sample swatches, and sizes tailored to the workforce.",
    icon: Users2,
  },
  {
    title: "Safety Compliance",
    desc: "All industrial coveralls and safety footwear adhere strictly to IS, CE, and EN certifications.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation & Design",
    desc: "Continuous integration of breathable fabrics, moisture-wicking layers, and chemical-shielding technologies.",
    icon: TrendingUp,
  },
];
// Timeline Journey
const timeline = [
  {
    year: "2018",
    title: "Founding & Early Steps",
    desc: "JC Enterprises was launched with a single workshop in Gujarat, India, delivering customized corporate uniform apparel and basic work shirts.",
  },
  {
    year: "2020",
    title: "Safety Apparel & PPE Expansion",
    desc: "Pivot and support during critical shortages: launched medical scrubs, safety face masks, and certified protective shields for essential workers.",
  },
  {
    year: "2022",
    title: "Modern Stitching Plant Launch",
    desc: "Opened our large-scale sewing factory. Scaled categories to include certified safety shoes, industrial overalls, gloves, and rainwear.",
  },
  {
    year: "2024",
    title: "Cleaning Equipment & Logistics Sizing",
    desc: "Partnered with premium logistics to supply PAN India. Expanded inventory to include industrial cleaning sweepers and chemical scrubbing machines.",
  },
  {
    year: "Present",
    title: "B2B Market Leadership",
    desc: "Serving 500+ major corporate clients across logistics, hotels, infrastructure, and heavy industrial facilities.",
  },
];
export default function About() {
  return (
    <div className="flex flex-col gap-20 py-10 overflow-hidden">
      
      {/* Page Header */}
      <section className="relative bg-bg-subtle border-b border-card-border py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Our Identity
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F2247] dark:text-white mt-3">
            About JC Enterprises
          </h1>
          <p className="text-text-muted text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Founded in 2018, we have grown into one of {"India's"} leading manufacturers and B2B suppliers of industrial uniforms, corporate workwear, and workplace safety equipment.
          </p>
        </div>
      </section>
      {/* Story & Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Our Journey
            </span>
            <h2 className="text-3xl font-extrabold text-foreground leading-snug">
              A Legacy of Quality, Trust & Workplace Safety
            </h2>
            <p className="text-text-muted leading-relaxed">
              At JC Enterprises, our purpose is simple: to manufacture comfortable, affordable, and durable workwear that safeguards the people building our tomorrow. From the corporate boardroom to the heavy steel foundry, we design uniforms tailored to the unique physical tasks of each employee.
            </p>
            <p className="text-text-muted leading-relaxed">
              Over the last 6+ years, we have scaled our facility to handle complex, large-scale custom sewing runs. Our safety shoe designs and PPE setups match standard certifications, ensuring plant managers can easily meet security compliances.
            </p>
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary dark:text-white">2018</span>
                <span className="text-xs text-text-muted mt-1 uppercase tracking-wider font-semibold">Incorporated</span>
              </div>
              <div className="w-px bg-card-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary dark:text-white">500+</span>
                <span className="text-xs text-text-muted mt-1 uppercase tracking-wider font-semibold">Bulk Partners</span>
              </div>
              <div className="w-px bg-card-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary dark:text-white">100%</span>
                <span className="text-xs text-text-muted mt-1 uppercase tracking-wider font-semibold">India Sourced</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#0F2247]/5 to-accent/5 dark:from-[#0F2247]/10 dark:to-accent/10 border border-card-border rounded-2xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[350px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
            <div className="flex flex-col gap-6 relative z-10">
              <Building className="w-12 h-12 text-accent" />
              <blockquote className="text-lg font-bold text-foreground leading-relaxed italic">
                {"\"We don't just supply uniforms; we supply confidence, compliance, and identity to workforces across the nation. Affordable pricing must not compromise worker comfort.\""}
              </blockquote>
              <div className="flex flex-col">
                <span className="font-extrabold text-[#0F2247] dark:text-white text-base">J. C. Patel</span>
                <span className="text-xs text-text-muted">Founder & Managing Director, JC Enterprises</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision Cards */}
      <section className="bg-bg-subtle border-y border-card-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card-bg border border-card-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                To engineer premium, high-utility workforce apparel and certified safety products that offer supreme comfort, reliable protection, and extreme longevity. We aim to make workplace safety compliance affordable for every Indian business.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-card-bg border border-card-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary dark:text-blue-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                To be {"India's"} most trusted single-source partner for corporate workwear and safety management, recognized globally for innovation, sustainable sourcing, and fast bulk logistics execution.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Foundational Pillars
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mt-2">
            Our Core Values
          </h2>
          <p className="text-text-muted text-sm max-w-xl mx-auto mt-2">
            The principles that guide our manufacturing processes and client partnerships every single day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-card-bg border border-card-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/5 text-accent border border-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Timeline Journey */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Growth Story
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mt-2">
            Our Corporate Timeline
          </h2>
          <p className="text-text-muted text-sm mt-2">
            Mapping our evolution from a modest local supplier to a PAN India B2B partner.
          </p>
        </div>
        {/* Timeline List */}
        <div className="relative border-l border-card-border ml-4 sm:ml-8 space-y-12 pb-4">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 group">
              {/* Year Badge */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-card-bg border-2 border-accent flex items-center justify-center text-[10px] font-extrabold text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-md">
                {item.year.substring(2)}
              </div>
              <div>
                <span className="text-xs font-bold text-accent tracking-widest uppercase block mb-1">
                  {item.year}
                </span>
                <h3 className="text-xl font-extrabold text-foreground group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Ready to collaborate Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#0F2247] rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--accent)_10%,transparent_80%)] opacity-20" />
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Looking for a Trusted Corporate Sourcing Vendor?
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              {"Let's"} organize custom sizing trials and quote analysis for your operations teams.
            </p>
          </div>
          <button
            onClick={() => triggerEnquiry()}
            className="relative z-10 px-6 py-3.5 bg-accent hover:bg-red-600 text-white font-bold rounded-xl shadow-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
          >
            Schedule Corporate Discussion
          </button>
        </div>
      </section>
    </div>
  );
}
