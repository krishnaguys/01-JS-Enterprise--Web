"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { triggerEnquiry } from "@/components/EnquiryModal";
import Hero from "@/components/home/Hero";


{/* STATS */}

<section className="bg-[#D71920] text-white">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-2 md:grid-cols-4">

      <div className="py-10 text-center border-b md:border-b-0 md:border-r border-white/20">
        <h3 className="text-4xl md:text-5xl font-extrabold">
          500+
        </h3>
        <p className="mt-2 text-white/90 font-medium">
          Happy Clients
        </p>
      </div>

      <div className="py-10 text-center border-b md:border-b-0 md:border-r border-white/20">
        <h3 className="text-4xl md:text-5xl font-extrabold">
          1000+
        </h3>
        <p className="mt-2 text-white/90 font-medium">
          Uniform Designs
        </p>
      </div>

      <div className="py-10 text-center border-r border-white/20">
        <h3 className="text-4xl md:text-5xl font-extrabold">
          25+
        </h3>
        <p className="mt-2 text-white/90 font-medium">
          Industries Served
        </p>
      </div>

      <div className="py-10 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold">
          PAN India
        </h3>
        <p className="mt-2 text-white/90 font-medium">
          Delivery Network
        </p>
      </div>

    </div>

  </div>

</section>

const categories = [
  {
    name: "Corporate Uniforms",
    slug: "corporate-uniforms",
    description: "Executive office uniforms and formal workwear.",
  },
  {
    name: "Industrial Uniforms",
    slug: "industrial-uniforms",
    description: "Factory, manufacturing and engineering uniforms.",
  },
  {
    name: "Security Uniforms",
    slug: "security-uniforms",
    description: "Professional security guard uniforms.",
  },
  {
    name: "Medical Uniforms",
    slug: "medical-uniforms",
    description: "Hospital, clinic and nursing uniforms.",
  },
  {
    name: "Chef Uniforms",
    slug: "chef-uniforms",
    description: "Hotel and restaurant kitchen uniforms.",
  },
  {
    name: "Housekeeping Uniforms",
    slug: "housekeeping-uniforms",
    description: "Cleaning and facility management uniforms.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">

<Hero/>

      {/* PRODUCTS */}

      <section className="py-20 bg-bg-subtle">

        <div className="max-w-7xl mx-auto px-6">


          <div className="
            flex
            justify-between
            items-center
            mb-10
          ">


            <h2 className="
              text-4xl
              font-bold
              text-foreground
            ">
              Our Product Categories
            </h2>


            <Link
              href="/products"
              className="
                flex
                items-center
                gap-2
                text-accent
                font-semibold
              "
            >
              View All
              <ArrowRight size={18}/>
            </Link>


          </div>




          <div className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          ">


            {categories.map((item)=>(

              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="
                  bg-card-bg
                  border
                  border-card-border
                  rounded-xl
                  p-8
                  hover:shadow-xl
                  transition
                "
              >


                <h3 className="
                  text-xl
                  font-bold
                  text-foreground
                ">
                  {item.name}
                </h3>


                <p className="
                  mt-3
                  text-text-muted
                ">
                  {item.description}
                </p>


                <span className="
                  inline-flex
                  items-center
                  mt-6
                  text-accent
                  font-semibold
                ">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4"/>
                </span>


              </Link>

            ))}


          </div>


        </div>

      </section>


      {/* CTA */}

      <section className="
        py-24
        bg-background
        text-foreground
      ">


        <div className="
          max-w-4xl
          mx-auto
          text-center
          px-6
        ">


          <h2 className="
            text-4xl
            font-bold
          ">
            Looking for Bulk Uniform Orders?
          </h2>


          <p className="
            mt-6
            text-text-muted
          ">
            Contact JC Enterprises today for customized industrial
            uniforms, PPE equipment and corporate workwear.
          </p>



          <button
            onClick={() => triggerEnquiry({})}
            className="
              mt-10
              bg-accent
              hover:opacity-90
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            Get Free Quotation
          </button>


        </div>


      </section>


    </main>
  );
}