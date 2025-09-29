"use server";

import { Product } from "@/lib/types";
import { revalidatePath } from "next/cache";

// Mock data store - in a real app, this would be a database
const products: Product[] = [
  {
    id: "1",
    title: "Artisan Ceramic Bowl",
    price: "24.99",
    description: "Handcrafted ceramic bowl perfect for serving or decoration.",
    category: "Ceramics",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Traditional Pottery Vase",
    price: "45.00",
    description: "Beautiful traditional pottery vase with intricate patterns.",
    category: "Pottery",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Handwoven Textile",
    price: "32.50",
    description: "Colorful handwoven textile perfect for home decoration.",
    category: "Textiles",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
  },
];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProduct(id: string): Promise<Product | null> {
  const product = products.find((p) => p.id === id);
  return product || null;
}

export async function createProduct(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as string;

    if (!title || !price || !description || !category || !image) {
      return { success: false, error: "All fields are required" };
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      title,
      price,
      description,
      category,
      image,
    };

    products.push(newProduct);
    revalidatePath("/admin/products");

    return { success: true };
  } catch (e) {
    console.error("Error al crear el producto: ", e);
    return { success: false, error: "Failed to create product" };
  }
}

export async function updateProduct(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as string;

    if (!id || !title || !price || !description || !category || !image) {
      return { success: false, error: "All fields are required" };
    }

    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      return { success: false, error: "Product not found" };
    }

    products[productIndex] = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    revalidatePath("/admin/products");

    return { success: true };
  } catch (e) {
    console.error("Error al actualizar el producto: ", e);
    return { success: false, error: "Failed to update product" };
  }
}

export async function deleteProduct(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      return { success: false, error: "Product not found" };
    }

    products.splice(productIndex, 1);
    revalidatePath("/admin/products");

    return { success: true };
  } catch (e) {
    console.error("Error al eliminar el producto: ", e);
    return { success: false, error: "Failed to delete product" };
  }
}
