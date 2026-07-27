import { Button } from "@/components/common/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Enterprise Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Showcase your business with a modern, professional portfolio.
        </p>
        <Button size="lg">Get Started</Button>
      </div>
    </section>
  );
};