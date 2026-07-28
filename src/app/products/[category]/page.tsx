import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";

interface Props {
  params: Promise<{
    category: string;
  }>;
}


// Add here 👇
export function generateStaticParams() {
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return categories.map((category) => ({
    category,
  }));
}


// Page component
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  if (!categoryProducts.length) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-foreground capitalize mb-8">
          {category.replace(/-/g, " ")}
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {categoryProducts.map((product) => (

            <Link
              key={product.id}
              href={`/products/${category}/${product.id}`}
              className="
              p-6 rounded-2xl
              bg-card-bg
              border border-card-border
              hover:shadow-xl
              transition
              "
            >

              <h2 className="text-xl font-bold text-foreground">
                {product.name}
              </h2>

              <p className="text-text-muted mt-2">
                {product.description}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}