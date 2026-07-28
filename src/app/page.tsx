"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { triggerEnquiry } from "@/components/EnquiryModal";

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

      {/* HERO */}
      <section className="bg-gradient-to-br from-bg-subtle to-background">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <span className="
            bg-accent 
            text-white
            px-4 
            py-2 
            rounded-full 
            text-sm 
            font-semibold
          ">
            Since 2018
          </span>


          <h1 className="
            mt-8
            text-5xl
            md:text-7xl
            font-extrabold
            leading-tight
            text-foreground
          ">
            Premium Industrial Uniforms
            <br />
            & Safety Solutions
          </h1>


          <p className="
            mt-6
            max-w-2xl
            text-lg
            text-text-muted
          ">
            JC Enterprises manufactures premium corporate uniforms,
            industrial uniforms, PPE equipment, safety shoes,
            housekeeping products and customized apparel for businesses
            across India.
          </p>


          <div className="mt-10 flex flex-wrap gap-4">

            <button
              onClick={() => triggerEnquiry({})}
              className="
                bg-accent
                hover:opacity-90
                text-white
                px-6
                py-3
                rounded-lg
                font-semibold
                transition
              "
            >
              Request Quote
            </button>


            <Link
              href="/products"
              className="
                border
                border-card-border
                text-foreground
                px-6
                py-3
                rounded-lg
                hover:bg-bg-subtle
                transition
              "
            >
              View Products
            </Link>

          </div>

        </div>

      </section>



      {/* ABOUT */}

      <section className="py-20 bg-background">

        <div className="max-w-6xl mx-auto px-6 text-center">


          <h2 className="
            text-4xl
            font-bold
            text-foreground
          ">
            Why Choose JC Enterprises?
          </h2>


          <p className="
            mt-6
            text-text-muted
            max-w-3xl
            mx-auto
          ">
            We provide durable, comfortable and customized industrial
            uniforms and safety products designed for factories,
            corporate offices, hospitals, hotels and institutions.
          </p>



          <div className="
            grid
            md:grid-cols-3
            gap-8
            mt-16
          ">

            {[
              "Premium Quality Fabrics",
              "Customized Branding",
              "Bulk Order Manufacturing",
              "Affordable Pricing",
              "Pan India Delivery",
              "Fast Turnaround",
            ].map((item) => (

              <div
                key={item}
                className="
                  bg-card-bg
                  border
                  border-card-border
                  rounded-xl
                  p-6
                  shadow-sm
                "
              >

                <CheckCircle
                  className="
                    mx-auto
                    text-accent
                    mb-4
                  "
                />


                <h3 className="
                  font-semibold
                  text-foreground
                ">
                  {item}
                </h3>


              </div>

            ))}

          </div>

        </div>

      </section>




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





      {/* STATS */}

      <section className="
        py-20
        bg-accent
        text-white
      ">


        <div className="
          max-w-6xl
          mx-auto
          px-6
        ">


          <div className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            text-center
          ">


            <div>
              <h3 className="text-5xl font-bold">
                2018
              </h3>
              <p>
                Established
              </p>
            </div>


            <div>
              <h3 className="text-5xl font-bold">
                14+
              </h3>
              <p>
                Product Categories
              </p>
            </div>


            <div>
              <h3 className="text-5xl font-bold">
                100+
              </h3>
              <p>
                Business Clients
              </p>
            </div>


            <div>
              <h3 className="text-5xl font-bold">
                100%
              </h3>
              <p>
                Quality Focus
              </p>
            </div>


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