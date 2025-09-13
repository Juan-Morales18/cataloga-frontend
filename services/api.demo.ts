import { Product } from "@/lib/types";

export async function getProducts(): Promise<Product[] | null> {
  const url = "https://fakestoreapi.com/products";

  try {
    const response = await fetch(url);

    if (response.ok) {
      return response.json();
    }

    return null;
  } catch (e) {
    console.error("An error ocurred");
    return null;
  }
}
