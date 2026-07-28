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
    title: "Premium Executive Admin Uniform",
    category: "Uniforms",
    code: "JC-GAL-01",
    image: "/gallery/uniform-1.jpg",
    desc: "Custom stitched corporate trousers and shirts matching corporate brand standards.",
  },
  {
    title: "HD Computerized Logo Embroidery",
    category: "Branding & Printing",
    code: "JC-GAL-02",
    image: "/gallery/uniform-2.jpg",
    desc: "High density computerized embroidery for corporate branding and identity.",
  },
  {
    title: "Steel Toe Safety Boots",
    category: "Safety Equipment",
    code: "JC-GAL-03",
    image: "/gallery/uniform-3.jpg",
    desc: "Industrial safety footwear designed for heavy-duty workplace protection.",
  },
  {
    title: "Industrial Scrubber Dryer Machine",
    category: "Cleaning Machines",
    code: "JC-GAL-04",
    image: "/gallery/uniform-4.jpg",
    desc: "Advanced industrial floor cleaning equipment for factories and facilities.",
  },
  {
    title: "Flame Resistant Boiler Suit",
    category: "Uniforms",
    code: "JC-GAL-05",
    image: "/gallery/uniform-5.jpg",
    desc: "Heavy-duty industrial coveralls with reflective safety features.",
  },
  {
    title: "Corporate Honeycomb Polo",
    category: "Corporate Apparel",
    code: "JC-GAL-06",
    image: "/gallery/uniform-6.jpg",
    desc: "Premium customized polo shirts with company branding.",
  },
  {
    title: "Construction Safety Helmet",
    category: "Safety Equipment",
    code: "JC-GAL-07",
    image: "/gallery/uniform-7.jpg",
    desc: "Certified industrial helmets with comfortable suspension systems.",
  },
  {
    title: "Security Guard Uniform Set",
    category: "Uniforms",
    code: "JC-GAL-08",
    image: "/gallery/uniform-8.jpg",
    desc: "Professional security uniforms with durable stitching.",
  },
  {
    title: "Industrial Vacuum Cleaner",
    category: "Cleaning Machines",
    code: "JC-GAL-09",
    image: "/gallery/uniform-9.jpg",
    desc: "Heavy-duty wet and dry vacuum solutions for industrial use.",
  },
  {
    title: "Cut Resistant Safety Gloves",
    category: "Safety Equipment",
    code: "JC-GAL-10",
    image: "/gallery/uniform-10.jpg",
    desc: "Protective gloves designed for industrial handling applications.",
  },
  {
    title: "Executive Corporate Blazer",
    category: "Corporate Apparel",
    code: "JC-GAL-11",
    image: "/gallery/uniform-11.jpg",
    desc: "Premium tailored corporate blazers with customized fitting.",
  },
  {
    title: "Custom Printed T-Shirt",
    category: "Branding & Printing",
    code: "JC-GAL-12",
    image: "/gallery/uniform-12.jpg",
    desc: "High quality printing solutions for promotional apparel.",
  },
];


export default function Gallery() {

  const [activeTab, setActiveTab] = useState("All");


  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeTab
        );


  return (

    <main className="flex flex-col gap-14 py-10 overflow-hidden">


      {/* HEADER */}

      <section className="
      relative
      bg-bg-subtle
      border-b
      border-card-border
      py-16
      ">

        <div className="
        max-w-5xl
        mx-auto
        px-6
        text-center
        ">


          <span className="
          text-xs
          font-bold
          uppercase
          tracking-widest
          text-accent
          ">
            Showcase Room
          </span>


          <h1 className="
          mt-4
          text-4xl
          sm:text-5xl
          font-extrabold
          text-foreground
          ">
            Our Project Gallery
          </h1>


          <p className="
          mt-5
          text-text-muted
          max-w-2xl
          mx-auto
          ">
            Explore our manufacturing projects,
            customized uniforms, safety equipment,
            branding solutions and industrial products.
          </p>


        </div>

      </section>




      {/* FILTER TABS */}


      <section className="
      max-w-7xl
      mx-auto
      px-6
      w-full
      ">


        <div className="
        flex
        flex-wrap
        justify-center
        gap-3
        ">


        {
          galleryCategories.map((cat)=>(

            <button

              key={cat}

              onClick={()=>setActiveTab(cat)}

              className={`
              px-5
              py-2.5
              rounded-xl
              text-xs
              font-bold
              transition-all

              ${
                activeTab===cat

                ?
                "bg-accent text-white shadow-lg"

                :

                "bg-bg-subtle border border-card-border text-foreground hover:border-accent"

              }

              `}
            >

              {cat}

            </button>


          ))
        }


        </div>


      </section>





      {/* IMAGE GRID */}


      <section className="
      max-w-7xl
      mx-auto
      px-6
      w-full
      ">


        <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8
        ">


        {
          filteredItems.map((item,index)=>(


            <div

            key={index}

            className="
            group
            bg-card-bg
            border
            border-card-border
            rounded-3xl
            overflow-hidden
            shadow-sm
            hover:shadow-2xl
            transition-all
            duration-500
            "

            >



              {/* IMAGE */}


              <div className="
              relative
              aspect-square
              overflow-hidden
              ">


                <Image

                  src={item.image}

                  alt={item.title}

                  fill

                  className="
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-700
                  "

                />



                {/* OVERLAY */}

                <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                " />


                <span className="
                absolute
                top-4
                left-4
                bg-[#0F2247]
                text-white
                text-[10px]
                font-bold
                px-3
                py-1
                rounded-full
                ">

                  {item.category}

                </span>


                <span className="
                absolute
                top-4
                right-4
                bg-white
                text-[#0F2247]
                text-[10px]
                font-bold
                px-2
                py-1
                rounded
                ">

                  {item.code}

                </span>


              </div>




              {/* CONTENT */}


              <div className="
              p-5
              ">


                <h3 className="
                text-lg
                font-extrabold
                text-foreground
                group-hover:text-accent
                transition
                ">

                  {item.title}

                </h3>



                <p className="
                mt-3
                text-xs
                text-text-muted
                leading-relaxed
                ">

                  {item.desc}

                </p>




                <button

                onClick={()=>
                  triggerEnquiry({
                    product:`${item.title} (${item.code})`
                  })
                }

                className="
                w-full
                mt-5
                py-3
                rounded-xl
                border
                border-card-border
                text-xs
                font-bold
                text-text-muted
                hover:bg-accent
                hover:text-white
                hover:border-accent
                transition
                "

                >

                  Enquire Quote

                </button>



              </div>



            </div>


          ))
        }


        </div>


      </section>






      {/* CTA */}


      <section className="
      max-w-4xl
      mx-auto
      px-6
      pb-10
      w-full
      ">


        <div className="
        bg-bg-subtle
        border
        border-card-border
        rounded-3xl
        p-10
        text-center
        ">


          <h2 className="
          text-2xl
          font-bold
          text-foreground
          ">

            Need Custom Manufacturing?

          </h2>


          <p className="
          mt-3
          text-sm
          text-text-muted
          ">

            Share your design, logo or product requirements.
            Our team will create a customized bulk solution.

          </p>



          <button

          onClick={()=>triggerEnquiry()}

          className="
          mt-6
          px-7
          py-3
          rounded-xl
          bg-accent
          text-white
          font-bold
          text-sm
          hover:opacity-90
          transition
          "

          >

            Request Consultation

          </button>


        </div>


      </section>


    </main>

  );
}