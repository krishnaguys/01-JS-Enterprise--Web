import { Button } from "@/components/common/Button";

export const Hero: React.FC = () => {
  return (
    <section
      className="
      relative 
      min-h-screen 
      flex 
      items-center 
      justify-center 
      bg-gradient-to-br 
      from-bg-subtle 
      to-background 
      text-foreground 
      px-4
      "
    >
      <div className="text-center">

        <h1
          className="
          text-5xl 
          md:text-7xl 
          font-bold 
          mb-6 
          text-foreground
          "
        >
          Enterprise Portfolio
        </h1>


        <p
          className="
          text-xl 
          md:text-2xl 
          text-text-muted 
          mb-8 
          max-w-2xl 
          mx-auto
          "
        >
          Showcase your business with a modern, professional portfolio.
        </p>


        <Button size="lg">
          Get Started
        </Button>

      </div>
    </section>
  );
};