
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle,
  FileSpreadsheet,
  Package,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { triggerEnquiry } from "@/components/EnquiryModal";
// Data mapping for all 14 product categories
const categoriesData: Record<
  string,
  {
    name: string;
    desc: string;
    longDesc: string;
    specs: string[];
    products: { name: string; code: string; specs: string[]; desc: string }[];
  }
> = {
  "corporate-uniforms": {
    name: "Corporate Uniforms",
    desc: "Executive blazers, formal shirts, business trousers, and tailored waistcoats.",
    longDesc:
      "Our corporate wear is designed to reflect professionalism, alignment, and brand values. We use premium wool-blend fabrics for blazers and moisture-wicking poly-cottons for shirts, ensuring comfort during long office hours.",
    specs: [
      "Fabric: Poly-Viscose / Premium Cotton Blend",
      "Colors: Customizable as per Brand Guidelines",
      "Customization: HD Computerized Logo Embroidery",
      "Sizes: Standard Indian Sizes S to 4XL",
    ],
    products: [
      {
        name: "Executive B2B Blazer",
        code: "JC-CU-01",
        desc: "Tailored fit executive blazer with anti-wrinkle lining and corporate badge embroidery.",
        specs: ["Material: Wool-Viscose blend", "Fit: Regular/Slim", "Color: Custom"],
      },
      {
        name: "Premium Formal Oxford Shirt",
        code: "JC-CU-02",
        desc: "High-comfort formal work shirts with reinforced collar stitching and custom logo print.",
        specs: ["Material: 60/40 Cotton-Poly", "GSM: 140", "Breathable fabric"],
      },
      {
        name: "Executive Business Trousers",
        code: "JC-CU-03",
        desc: "Flat-front classic fit trousers with adjustable waistband and side-seam utility pockets.",
        specs: ["Material: Poly-Viscose", "Crease-resistant", "Durable zippers"],
      },
      {
        name: "Tailored Corporate Waistcoat",
        code: "JC-CU-04",
        desc: "Elegantly finished waistcoats for front-desk managers, hospitality staff, and retail crews.",
        specs: ["Material: Premium Poly-blend", "Fit: Custom fit", "Button front"],
      },
    ],
  },
  "security-uniforms": {
    name: "Security Uniforms",
    desc: "Durable guard uniforms, tactical trousers, web belts, and guard accessories.",
    longDesc:
      "Engineered for high durability and continuous patrolling duties. Features rigid stitching, tactical shoulder loops, double chest pockets, and fade-resistant fabric colors to keep guard forces looking sharp.",
    specs: [
      "Fabric: Rigid Drill Poly-Cotton Blend",
      "Reinforcements: Double stitching at high stress points",
      "Sizing: Custom fit for guard parameters",
      "Colors: Khaki, Navy Blue, Guard Gray, Black",
    ],
    products: [
      {
        name: "Double-Pocket Guard Shirt",
        code: "JC-SU-01",
        desc: "Classic patrol shirt with button-down epaulets, double chest pockets, and pen slots.",
        specs: ["Fabric: 65% Poly / 35% Cotton Drill", "GSM: 190", "Fade resistant"],
      },
      {
        name: "Tactical Guard Cargo Pants",
        code: "JC-SU-02",
        desc: "Robust cargo pants with deep side pockets, reinforced knees, and thick belt loops.",
        specs: ["Fabric: Heavy Drill", "GSM: 240", "Reinforced knees"],
      },
      {
        name: "Ceremonial Guard Blazer & Lanyard Set",
        code: "JC-SU-03",
        desc: "Full ceremonial officer suit including styled shoulder cords, brass-button blazers, and lanyards.",
        specs: ["Polyester blend", "Gold/Silver trim options", "Traditional cut"],
      },
    ],
  },
  "industrial-uniforms": {
    name: "Industrial Uniforms",
    desc: "Flame retardant coveralls, high-vis safety apparel, and chemical-resistant suits.",
    longDesc:
      "Engineered to withstand extreme factory floors, refineries, welding sections, and construction yards. Our flame-resistant coveralls and high-vis apparel are compliant with national and international safety regulations.",
    specs: [
      "Fabric: Flame Retardant (FR) Cotton / Antistatic Blend",
      "Compliance: EN ISO 11612, NFPA 2112 Compliant",
      "Reflectors: Certified 3M Glass-Bead Reflective Tapes",
      "Thread: FR Sewing Thread used throughout",
    ],
    products: [
      {
        name: "Flame-Retardant Boiler Suit",
        code: "JC-IU-01",
        desc: "Premium single-piece boiler suit with action back, two-way heavy brass zippers, and multi-pockets.",
        specs: ["Material: 100% FR Cotton", "GSM: 280 / 320", "EN 11612 Certified"],
      },
      {
        name: "High-Visibility Safety Shirt",
        code: "JC-IU-02",
        desc: "Lightweight safety shirt featuring dual horizontal and vertical reflective 3M strips.",
        specs: ["Material: 80/20 Cotton-Poly", "GSM: 150", "EN 471 Reflectors"],
      },
      {
        name: "Heavy-Duty Cargo Boiler Suit",
        code: "JC-IU-03",
        desc: "Reinforced factory coverall with multiple tool pockets, hammer loops, and elasticated waist.",
        specs: ["Material: Poly-Cotton Drill", "GSM: 260", "Double stitched"],
      },
    ],
  },
  "housekeeping-uniforms": {
    name: "Housekeeping Uniforms",
    desc: "Tunic sets, clean-fit pants, aprons, and staff jackets.",
    longDesc:
      "Designed with an emphasis on flexibility and cleanliness. These uniforms use soft, moisture-wicking fabrics that keep cleaning crews comfortable during physically intensive shifts.",
    specs: [
      "Fabric: Lightweight Poly-Cotton Comfort Weave",
      "Washing: Bleach-resistant dyes and color lock",
      "Features: Stretch paneling, front patch pockets",
    ],
    products: [
      {
        name: "V-Neck Housekeeping Tunic",
        code: "JC-HK-01",
        desc: "Lightweight tunic with contrast collar borders, split side hems, and double front patch pockets.",
        specs: ["Material: Soft Poly-Cotton", "GSM: 160", "Patch pockets"],
      },
      {
        name: "Facility Comfort Cargo Pants",
        code: "JC-HK-02",
        desc: "Flexible, loose-fit utility trousers with elastic waist inserts and deep side compartments.",
        specs: ["Material: Stretch cotton-poly", "GSM: 180", "Comfort fit"],
      },
      {
        name: "Full-Coverage Cleaning Apron",
        code: "JC-HK-03",
        desc: "Bleach-resistant multi-pocket apron with adjustable neck loop and rear ties.",
        specs: ["PVC-coated inner option", "Splashproof", "Reinforced corners"],
      },
    ],
  },
  "chef-uniforms": {
    name: "Chef Uniforms",
    desc: "Double-breasted coats, checkerboard trousers, and chef caps.",
    longDesc:
      "Tailored for high-temperature commercial kitchens and food prep zones. Features air-mesh underarms, durable fabric buttons, and oil-stain repellant finishes.",
    specs: [
      "Fabric: Heavy Egyptian Cotton / Poly-Cotton blend",
      "Ventilation: Underarm air-mesh inserts",
      "Buttons: Soft fabric stud buttons for quick removal",
    ],
    products: [
      {
        name: "Executive Double-Breasted Chef Coat",
        code: "JC-CF-01",
        desc: "Classic white chef coat with reversible front overlap, French cuffs, and thermometer sleeve pockets.",
        specs: ["Material: 100% Egyptian Cotton", "GSM: 240", "French cuffs"],
      },
      {
        name: "Checkerboard Kitchen Pants",
        code: "JC-CF-02",
        desc: "Traditional checkerboard pattern pants with elastic waistband and drawstring for quick fit.",
        specs: ["Material: Cotton-poly mix", "Drawstring closure", "Stain release"],
      },
      {
        name: "Professional Bib Chef Apron",
        code: "JC-CF-03",
        desc: "Heavy-duty twill chef apron with adjustable buckle straps and reinforced utility rings.",
        specs: ["Material: Heavy Twill", "GSM: 260", "Adjustable neck"],
      },
    ],
  },
  "medical-uniforms": {
    name: "Medical Uniforms",
    desc: "Antimicrobial doctor coats, nursing scrubs, and laboratory aprons.",
    longDesc:
      "Our medical range prioritizes safety and hygiene. Fabrics are treated with antimicrobial and fluid-barrier finishes to protect healthcare providers against fluid splashes and bacterial contact.",
    specs: [
      "Fabric: Antimicrobial / Fluid-repellant Poly-Cotton",
      "Care: Auto-clavable and chlorine wash resistant",
      "Certifications: FDA approved antibacterial coating",
    ],
    products: [
      {
        name: "Antimicrobial Doctor Coat",
        code: "JC-MD-01",
        desc: "Classic full-length or mid-length lab coat with notch lapels, side slits for trouser pocket access.",
        specs: ["Material: Cotton-rich twill", "GSM: 200", "Side hand-slits"],
      },
      {
        name: "Comfort Nursing Scrub Set",
        code: "JC-MD-02",
        desc: "Soft-touch scrub shirt and matching pants featuring multiple cargo pockets for syringes and pens.",
        specs: ["Material: 65% Poly/35% Rayon Comfort", "GSM: 170", "Multi-pockets"],
      },
      {
        name: "Surgical Isolation Gown Set",
        code: "JC-MD-03",
        desc: "Reusable surgeon gowns with knitted cuffs, neck tie closures, and fluid-shield barrier panels.",
        specs: ["Fluid-shield panels", "Knitted cuffs", "Chlorine-safe dyes"],
      },
    ],
  },
  "customized-t-shirts": {
    name: "Customized T-Shirts",
    desc: "Premium polo shirts and round neck t-shirts with branding.",
    longDesc:
      "Ideal for corporate team outings, casual Fridays, promotional campaigns, and delivery executives. We utilize high-quality prints and dyes that maintain color brightness after dozens of wash cycles.",
    specs: [
      "Fabric: 100% Combed Cotton / Dry-fit Honeycomb Polyester",
      "GSM Range: 160 GSM (Round Neck) to 240 GSM (Heavy Polo)",
      "Branding: Screen Print, DTF Print, Custom embroidery",
    ],
    products: [
      {
        name: "Corporate Honeycomb Polo",
        code: "JC-TS-01",
        desc: "Premium polo t-shirt with ribbed collar and cuffs, matching custom buttons, and side slits.",
        specs: ["Material: Honeycomb Cotton-poly", "GSM: 220", "Ribbed collar"],
      },
      {
        name: "Promotional Round Neck T-Shirt",
        code: "JC-TS-02",
        desc: "Soft round neck shirt perfect for bulk giveaways, events, and outdoor marketing campaigns.",
        specs: ["Material: 100% Combed Cotton", "GSM: 160", "Double needle hem"],
      },
      {
        name: "Dry-Fit Performance Sports Polo",
        code: "JC-TS-03",
        desc: "Moisture-wicking dry-fit polo designed for active delivery crews, field officers, and sports events.",
        specs: ["Material: 100% Dry-fit Polyester", "GSM: 180", "Anti-sweat"],
      },
    ],
  },
  "safety-shoes": {
    name: "Safety Shoes",
    desc: "Steel-toe cap shoes, anti-skid boots, and hazard safety footwear.",
    longDesc:
      "Designed to protect workforces from heavy drops, punctures, electrical shocks, and slips. Certified under Bureau of Indian Standards (BIS) and CE guidelines to ensure compliance.",
    specs: [
      "Protection: 200J Impact-Resistant Steel / Composite Toe",
      "Midsole: Puncture-Resistant Steel Plate option available",
      "Certifications: IS:15298, CE EN 20345 compliant",
    ],
    products: [
      {
        name: "Steel-Toe Puncture-Proof Shoes",
        code: "JC-SS-01",
        desc: "Low-cut safety shoe with high-grade split leather, steel-toe guard, and shock-absorbing PU sole.",
        specs: ["Steel-toe (200 Joules)", "PU Double Density sole", "IS:15298 Certified"],
      },
      {
        name: "Heavy-Duty High-Ankle Safety Boots",
        code: "JC-SS-02",
        desc: "Rugged high-ankle boots designed for construction sites, heavy mines, and casting plants.",
        specs: ["Material: Full-grain leather", "Oil/Chemical resistant", "Puncture steel plate"],
      },
      {
        name: "Dielectric Electrician Shoes",
        code: "JC-SS-03",
        desc: "Metal-free composite toe shoes designed with electrical insulating soles protecting up to 15KV.",
        specs: ["100% Metal-Free", "Insulating sole (15KV)", "Composite toe cap"],
      },
    ],
  },
  "ppe-equipment": {
    name: "PPE Equipment",
    desc: "Bio-overalls, splash protection, and protective shields.",
    longDesc:
      "Complete personal protective equipment (PPE) systems designed for chemical handlers, clinical workforces, and industrial spraying teams. Matches European standard certifications.",
    specs: [
      "Material: Microporous laminated non-woven fabric",
      "Protection: Class 3 / 4 liquid splash and particle shield",
      "Accessories: Heat-taped seams for zero gas penetration",
    ],
    products: [
      {
        name: "Level 3 Bio-Safety Coverall Suit",
        code: "JC-PE-01",
        desc: "Laminated bio-hazard overall with integrated shoe covers, elastic face-hood, and zip-guard tape.",
        specs: ["Material: Microporous laminate", "Seam sealing", "Anti-pathogen"],
      },
      {
        name: "Anti-Fog Clear Face Shield",
        code: "JC-PE-02",
        desc: "Optically clear full face shield with adjustable head mount and comfortable foam padding.",
        specs: ["Polycarbonate visor", "Anti-fog layer", "Splash protection"],
      },
      {
        name: "Splash-Proof Chemical Protection Suit",
        code: "JC-PE-03",
        desc: "Durable PVC-coated safety suit designed for acid-washing lines and hazardous chemical mixing zones.",
        specs: ["PVC-coated nylon", "Acid/Alkali resistant", "Hooded design"],
      },
    ],
  },
  "helmets": {
    name: "Helmets",
    desc: "Industrial safety helmets, hard hats, and chinstraps.",
    longDesc:
      "Protects workforces against overhead fall damage, side impact, and electrical conduction. Features high-density polyethylene construction and comfortable multi-point suspension grids.",
    specs: [
      "Material: UV-stabilized High-Density Polyethylene (HDPE)",
      "Suspension: 4-Point or 6-Point textile webbing grid",
      "Standards: IS:2925, CE EN 397 certified",
    ],
    products: [
      {
        name: "Class A Construction Safety Helmet",
        code: "JC-HL-01",
        desc: "Traditional safety helmet with peak, sweatband, and adjustable chin strap.",
        specs: ["HDPE Shell", "4-Point textile cradle", "IS:2925 Certified"],
      },
      {
        name: "Ventilated Ratchet Safety Helmet",
        code: "JC-HL-02",
        desc: "Modern hard hat featuring vents to reduce heat buildup and a ratchet dial for quick head sizing.",
        specs: ["Ventilation ports", "Dial Ratchet adjustment", "Sweatband integrated"],
      },
      {
        name: "High-Voltage Electrical Safety Helmet",
        code: "JC-HL-03",
        desc: "Non-vented peak safety helmet designed to offer insulation up to 20,000 Volts.",
        specs: ["Class E insulation (20KV)", "No metal parts", "Impact resistant"],
      },
    ],
  },
  "gloves": {
    name: "Gloves",
    desc: "Chemical gloves, welder gloves, and cut-resistant gloves.",
    longDesc:
      "High quality hand protection ensuring workers maintain grip while preventing cuts, chemical burns, thermal damage, or contact injuries.",
    specs: [
      "Material: Heavy split-cowhide, Nitrile rubber, HPPE fibers",
      "Protection: EN 388 mechanical ratings up to Level 5",
      "Features: Seamless liner knit, textured anti-slip palms",
    ],
    products: [
      {
        name: "Heavy-Duty Split Leather Welder Gloves",
        code: "JC-GL-01",
        desc: "14-inch long heat-resistant gloves lined with soft cotton, stitched with Kevlar thread.",
        specs: ["Split cowhide leather", "Kevlar stitching", "14-inch gauntlet cuff"],
      },
      {
        name: "Level 5 Cut-Resistant Grip Gloves",
        code: "JC-GL-02",
        desc: "HPPE shell gloves with PU coating on palms for supreme tactile sensitivity and cut defense.",
        specs: ["HPPE Fiber shell", "PU palm coating", "EN 388 Level 5 Cut"],
      },
      {
        name: "Nitrile Chemical-Resistant Gloves",
        code: "JC-GL-03",
        desc: "Thick chemical gloves with textured grip for handling petroleum, grease, and acidic washes.",
        specs: ["100% Nitrile", "Thickness: 15 mil", "Solvent resistant"],
      },
    ],
  },
  "rainwear": {
    name: "Rainwear",
    desc: "PVC rain suits, reflective raincoats, and weatherproof parkas.",
    longDesc:
      "Keeps outdoor workers dry and visible during monsoon seasons. Made with double-welded seam technology to guarantee zero water seepage.",
    specs: [
      "Material: Heavy PVC / Polyester backing",
      "Seams: High-frequency heat sealed seam welds",
      "Visibility: 2-inch silver reflective safety lines",
    ],
    products: [
      {
        name: "Heavy-Duty Double-Coated PVC Rain Suit",
        code: "JC-RW-01",
        desc: "Two-piece rain jacket and pant set with zipper front, storm flaps, and adjustable sleeve snaps.",
        specs: ["PVC/Polyester fabric", "Storm flap design", "Double welded seams"],
      },
      {
        name: "High-Visibility Safety Raincoat",
        code: "JC-RW-02",
        desc: "Long-body raincoat with hood, featuring highly visible colors and horizontal reflective tape panels.",
        specs: ["Reflective tapes", "Waterproof pockets", "Underarm ventilation"],
      },
    ],
  },
  "winter-wear": {
    name: "Winter Wear",
    desc: "Thermal parkas, windbreaker jackets, and corporate sweaters.",
    longDesc:
      "Ensures comfort and productivity in cold warehouse chambers, high-altitude factory locations, and chilly winter morning shifts.",
    specs: [
      "Material: Water-repellant Nylon Shell / Fleece insulation lining",
      "Temp Rating: Comfortable down to -5 degrees Celsius",
      "Features: Detachable hoods, windproof zippers",
    ],
    products: [
      {
        name: "Insulated Heavy Safety Parka",
        code: "JC-WW-01",
        desc: "Waterproof outer shell safety jacket with heavy thermal filling and high-vis safety bands.",
        specs: ["Heavy polyester insulation", "Reflective safety tapes", "Detachable hood"],
      },
      {
        name: "Fleece-Lined Windbreaker Jacket",
        code: "JC-WW-02",
        desc: "Casual windbreaker featuring corporate design lines, fleece lining, and logo embroidery.",
        specs: ["Nylon outer shell", "Fleece inner lining", "Adjustable cuffs"],
      },
    ],
  },
  "cleaning-machines": {
    name: "Cleaning Machines",
    desc: "Scrubber dryers, wet/dry vacuums, and ride-on sweepers.",
    longDesc:
      "We supply high-efficiency industrial floor cleaners designed to clean warehouses, corporate offices, assembly lines, and public facilities quickly and reliably.",
    specs: [
      "Power Options: Corded Electric / Lithium Battery powered",
      "Operation: Walk-behind or Ride-on automation configurations",
      "Warranty: 1 Year B2B Warranty with site support options",
    ],
    products: [
      {
        name: "Walk-Behind Scrubber Dryer",
        code: "JC-CM-01",
        desc: "Compact floor scrubber that scrubs and dries floors in a single pass. Ideal for hospital corridors.",
        specs: ["Cleaning capacity: 1800 sqm/hr", "Battery operated", "Squeegee width: 750mm"],
      },
      {
        name: "Heavy-Duty Wet & Dry Vacuum Cleaner",
        code: "JC-CM-02",
        desc: "High-suction stainless steel tank industrial vacuum for liquid spill cleanups and metal shaving removal.",
        specs: ["Tank capacity: 80 Liters", "Dual motor design", "Suction: 250 mbar"],
      },
      {
        name: "Ride-On Floor Sweeper Machine",
        code: "JC-CM-03",
        desc: "Heavy-duty ride-on sweeper with dual side brushes, perfect for large warehouse floors and industrial yards.",
        specs: ["Sweeping path: 1200mm", "Electric dump option", "Dust filtration"],
      },
    ],
  },
};
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categoryId } = await params;
  const category = categoriesData[categoryId];
  if (!category) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <HelpCircle className="w-16 h-16 text-accent mb-4 animate-pulse" />
        <h1 className="text-3xl font-bold text-foreground">Category Not Found</h1>
        <p className="text-text-muted text-sm mt-2">
          The requested product category does not exist in our catalog.
        </p>
        <Link
          href="/products"
          className="mt-6 flex items-center gap-2 px-5 py-2.5 bg-primary text-white hover:bg-slate-800 rounded-xl font-bold transition-all text-xs"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Product Catalog
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-12 py-6 overflow-hidden">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/products" className="hover:text-accent font-medium">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-semibold text-foreground">{category.name}</span>
        </div>
      </div>
      {/* Category Banner & Specs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Description */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs text-accent hover:underline font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO ALL PRODUCTS
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2247] dark:text-white leading-tight">
            {category.name}
          </h1>
          <p className="text-text-muted text-base leading-relaxed mt-2">
            {category.longDesc}
          </p>
          <div className="mt-4">
            <button
              onClick={() => triggerEnquiry({ category: category.name })}
              className="px-6 py-3.5 bg-accent hover:bg-red-650 text-white rounded-xl font-bold shadow-lg shadow-accent/20 cursor-pointer text-sm transition-all"
            >
              Enquire Bulk Order Quote
            </button>
          </div>
        </div>
        {/* Technical Specs Panel */}
        <div className="bg-bg-subtle border border-card-border p-6 rounded-2xl flex flex-col gap-4">
          <h3 className="font-extrabold text-lg text-foreground flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-accent" />
            Sourcing Parameters
          </h3>
          <ul className="space-y-2.5 text-xs text-text-muted border-t border-card-border pt-3">
            {category.specs.map((spec, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Available Items in {category.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((prod, idx) => (
            <div
              key={idx}
              className="bg-card-bg border border-card-border p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-bg-subtle flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Package className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-accent/10 text-accent border border-accent/25 rounded-md">
                    {prod.code}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                  {prod.name}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed mt-2">
                  {prod.desc}
                </p>
                {/* Specs */}
                <div className="border-t border-card-border my-4 pt-3">
                  <span className="text-[10px] font-bold text-foreground uppercase block mb-1">
                    Technical Specifications
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {prod.specs.map((sp, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] px-2 py-1 bg-bg-subtle border border-card-border text-text-muted rounded-md font-medium"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  triggerEnquiry({
                    category: category.name,
                    product: `${prod.name} (${prod.code})`,
                  })
                }
                className="w-full mt-6 py-2.5 bg-primary text-white hover:bg-slate-800 dark:hover:bg-blue-900 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Request Item Quote
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Trust Badge Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="border border-card-border rounded-2xl p-6 bg-bg-subtle flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-accent" />
            <div>
              <h4 className="font-bold text-foreground text-sm">Industrial Grade Certification</h4>
              <p className="text-xs text-text-muted">Our materials undergo heavy washing tests to confirm color retention and thread safety compliance.</p>
            </div>
          </div>
          <button
            onClick={() => triggerEnquiry({ category: category.name })}
            className="px-5 py-2.5 bg-accent hover:bg-red-650 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
          >
            Custom Quote Sizing
          </button>
        </div>
      </section>
    </div>
  );
}