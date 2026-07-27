export const SITE_NAME = "Enterprise Portfolio";
export const SITE_DESCRIPTION = "Enterprise-level portfolio website";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.8,
};
