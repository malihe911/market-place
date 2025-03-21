// src/app/api/products/route.ts
import { mockProducts } from "@/data/mockData";

export async function GET() {
  return Response.json(mockProducts);
}
