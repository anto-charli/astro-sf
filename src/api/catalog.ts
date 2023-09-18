import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const catalogResponse = await fetch(
    "https://fakestoreapi.com/products?limit=10"
  );
  const catalogData = await catalogResponse.json();
  return new Response(JSON.stringify(catalogData));
};
