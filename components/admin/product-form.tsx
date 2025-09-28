"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/lib/types";
import { X, Save } from "lucide-react";

const productSchema = z.object({
  title: z.string().min(1, "El título es requerido"),
  price: z.string().min(1, "El precio es requerido"),
  description: z.string().min(1, "La descripción es requerida"),
  category: z.string().min(1, "La categoría es requerida"),
  image: z.string().url("Debe ser una URL válida"),
});

type ProductFormData = z.infer<typeof productSchema>;

interface ProductFormProps {
  product?: Product;
  onSubmit: (data: ProductFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export function ProductForm({
  product,
  onSubmit,
  onCancel,
  isLoading,
}: ProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: product
      ? {
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
        }
      : undefined,
    mode: "onBlur",
  });

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary">
          {product ? "Editar Producto" : "Agregar Nuevo Producto"}
        </h2>
        <Button variant="ghost" size="icon" onClick={onCancel}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">
              Título
            </label>
            <Input
              {...register("title")}
              placeholder="Título del producto"
              className={errors.title ? "border-destructive" : ""}
            />
            {errors.title && (
              <p className="text-sm text-destructive">{errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">
              Precio
            </label>
            <Input
              {...register("price")}
              placeholder="0.00"
              type="number"
              step="0.01"
              className={errors.price ? "border-destructive" : ""}
            />
            {errors.price && (
              <p className="text-sm text-destructive">{errors.price.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-text-primary">
            Descripción
          </label>
          <textarea
            {...register("description")}
            placeholder="Descripción del producto"
            rows={3}
            className={`flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${
              errors.description ? "border-destructive" : ""
            }`}
          />
          {errors.description && (
            <p className="text-sm text-destructive">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">
              Categoría
            </label>
            <Input
              {...register("category")}
              placeholder="Categoría del producto"
              className={errors.category ? "border-destructive" : ""}
            />
            {errors.category && (
              <p className="text-sm text-destructive">
                {errors.category.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">
              URL de Imagen
            </label>
            <Input
              {...register("image")}
              placeholder="https://ejemplo.com/imagen.jpg"
              className={errors.image ? "border-destructive" : ""}
            />
            {errors.image && (
              <p className="text-sm text-destructive">{errors.image.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={!isValid || isLoading}
            className="gap-2"
          >
            <Save className="h-4 w-4" />
            {isLoading
              ? "Guardando..."
              : product
              ? "Actualizar Producto"
              : "Crear Producto"}
          </Button>
        </div>
      </form>
    </div>
  );
}
