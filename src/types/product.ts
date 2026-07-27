export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price?: number;
  features: string[];
  tags: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}
