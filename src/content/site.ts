export const site = {
  name: "Packcore Packaging",
  tagline: "Powering Products with Better Packaging",
  description:
    "Innovative, structural packaging engineered for modern brands. Designed for transit durability, sustainable impact, and flawless customer perception.",
  email: "info@packcorepackaging.com",
  phone: "+91-9311866034",
  phoneTel: "+919311866034",
  whatsapp: "https://wa.me/919311866034",
  location: "Ghaziabad, Uttar Pradesh, India",
  address: ["Packcore Packaging Manufacturing Corp.", "Industrial Packaging Hub, Ghaziabad", "Uttar Pradesh 201310, India"],
  url: "https://packcorepackaging.com",
} as const;

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#industries", label: "Industries" },
  { href: "#solutions", label: "Solutions" },
  { href: "#about", label: "Engineering Vision" },
  { href: "#contact", label: "Contact" },
] as const;

export const industries = [
  {
    code: "IND-01",
    title: "FMCG Packaging",
    body: "High-speed production runs with moisture-resistant barriers, crisp offset litho-laminated graphics, and shelf-ready retail perforations.",
    meta: "High Volume Production",
    icon: "bag",
  },
  {
    code: "IND-02",
    title: "E-Commerce & D2C",
    body: "Self-locking roll-end mailers, intuitive tear-strip pull tabs, and tamper-evident closures built for an unforgettable unboxing experience.",
    meta: "Tear-Strip Flaps",
    icon: "cube",
  },
  {
    code: "IND-03",
    title: "Retail Displays",
    body: "Point-of-sale display trays, counter units (CDUs), and premium rigid presentation boxes designed for immediate customer engagement.",
    meta: "Rigid & POS",
    icon: "brush",
  },
  {
    code: "IND-04",
    title: "Food & Beverage",
    body: "Certified direct-contact food-grade paperboard, grease barriers, and corrugated insulated trays meeting international food safety compliance.",
    meta: "Food-Grade Certified",
    icon: "scale",
  },
  {
    code: "IND-05",
    title: "Pharmaceuticals",
    body: "Precision folding cartons with Braille embossing options, secure tamper-evident tabs, serialized barcode integration, and batch traceability.",
    meta: "Tamper-Evident",
    icon: "shield",
  },
  {
    code: "IND-06",
    title: "Heavy Manufacturing",
    body: "Double and triple-wall corrugated master cartons, heavy-duty internal partitions, and custom engineered protective void fills.",
    meta: "Triple-Wall Strength",
    icon: "factory",
  },
] as const;

export const pillars = [
  {
    code: "PILLAR 01",
    title: "Durability",
    body: "Tested under extreme stacking loads and transit vibration. High Mullen burst strength corrugated walls eliminate crushing.",
    points: ["High Edge Crush Test (ECT)", "Calibrated flute resilience"],
    icon: "layers",
  },
  {
    code: "PILLAR 02",
    title: "Protection",
    body: "Comprehensive defense against impact shocks, humidity, and abrasion. Custom internal inserts hold products firmly in place.",
    points: ["Precision die-cut dividers", "Anti-scratch coatings"],
    icon: "shield",
  },
  {
    code: "PILLAR 03",
    title: "Convenience",
    body: "Rapid setup mechanics with crash-lock automatic bottoms, integrated peel-and-seal strips, and intuitive unboxing pull tabs.",
    points: ["Auto crash-lock bases", "Tool-free frustrationless open"],
    icon: "bolt",
  },
  {
    code: "PILLAR 04",
    title: "Professional Presentation",
    body: "Transform routine deliveries into premium customer moments. Crisp color registration, matte spot UV, and crisp embossing.",
    points: ["Spot UV & Foil Stamping", "Crisp structural lines"],
    icon: "spark",
  },
] as const;

export const sectors = [
  "E-Commerce & D2C",
  "FMCG Consumer Goods",
  "Retail Display & Rigid Boxes",
  "Food & Beverage",
  "Pharmaceuticals",
  "Heavy Manufacturing / Corrugated",
] as const;

export const volumes = [
  "5,000 – 25,000 units",
  "25,000 – 100,000 units",
  "100,000 – 500,000 units",
  "500,000+ units (Enterprise)",
] as const;
