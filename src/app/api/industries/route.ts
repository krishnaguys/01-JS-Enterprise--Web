import { industries } from "@/data/industries";

export async function GET() {
  return Response.json(industries);
}
