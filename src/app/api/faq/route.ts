import { faqData } from "@/data/faq";

export async function GET() {
  return Response.json(faqData);
}
