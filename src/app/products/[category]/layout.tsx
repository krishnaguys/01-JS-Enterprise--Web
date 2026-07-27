import { productCategories } from "@/data/products";

export const dynamicParams = false;

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}