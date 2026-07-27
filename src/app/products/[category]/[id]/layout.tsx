import { productCategories, products } from "@/data/products";

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: Array<{ category: string; id: string }> = [];
  
  productCategories.forEach((category) => {
    products
      .filter((p) => p.category === category.slug)
      .forEach((product) => {
        params.push({
          category: category.slug,
          id: product.id,
        });
      });
  });
  
  return params;
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}