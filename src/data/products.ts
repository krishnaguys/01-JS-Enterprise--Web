import { Product, ProductCategory } from "@/types/product";

export const productCategories: ProductCategory[] = [
  {
    id: "1",
    name: "Software Solutions",
    slug: "software-solutions",
    description: "Enterprise software solutions",
    icon: "Code",
  },
  {
    id: "2",
    name: "Consulting",
    slug: "consulting",
    description: "Expert consulting services",
    icon: "Briefcase",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "High-quality product",
    category: "software-solutions",
    image: "/images/products/product-1.jpg",
    features: ["Feature 1", "Feature 2"],
    tags: ["enterprise", "scalable"],
  },
];