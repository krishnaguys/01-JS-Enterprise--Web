export async function GET() {
  const products = [
    {
      id: "1",
      name: "Enterprise CRM Suite",
      category: "software-solutions",
      description: "Comprehensive customer relationship management solution",
      price: 5000,
      features: ["Sales Pipeline Management", "Customer Analytics", "Team Collaboration"],
      tags: ["enterprise", "scalable", "crm"],
    },
    {
      id: "2",
      name: "Cloud Infrastructure Consulting",
      category: "consulting",
      description: "Expert guidance for cloud migration and optimization",
      price: 3000,
      features: ["Architecture Design", "Migration Planning", "Cost Optimization"],
      tags: ["consulting", "cloud", "enterprise"],
    },
  ];

  return Response.json(products);
}
