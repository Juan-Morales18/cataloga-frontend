"use client";

import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

interface ProductDialogProps {
  product: Product;
  onClose: () => void;
}

export function ProductDialog({ product, onClose }: ProductDialogProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg border border-border max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-text-primary">
            Detalles del Producto
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {product.title}
                </h3>
                <p className="text-3xl font-bold text-primary">
                  ${parseFloat(product.price).toFixed(2)}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-text-secondary mb-2">
                  Categoría
                </h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {product.category}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-medium text-text-secondary mb-2">
                  Descripción
                </h4>
                <p className="text-text-primary leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}
