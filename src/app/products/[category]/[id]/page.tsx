import { products } from "@/data/products";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Card } from "@/components/ui/Card";
import { notFound } from "next/navigation";
import { Button } from "@/components/common/Button";

interface ProductDetailPageProps {
  params: {
    category: string;
    id: string;
  };
}

export default function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const product = products.find((p) => p.id === params.id && p.category === params.category);

  if (!product) {
    notFound();
  }

  return (
    <div className="container section-padding">
      <SectionTitle title={product.name} />
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>
        
        <div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {product.description}
          </p>
          
          {product.price && (
            <p className="text-3xl font-bold text-blue-600 mb-8">
              ${product.price.toLocaleString()}
            </p>
          )}
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <Button size="lg">Request Demo</Button>
        </div>
      </div>
    </div>
  );
}