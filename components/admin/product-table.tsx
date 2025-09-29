"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
  onView: (product: Product) => void;
}

export function ProductTable({
  products,
  onEdit,
  onDelete,
  onView,
}: ProductTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-border">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-text-secondary">
                Producto
              </th>
              <th className="text-left p-4 text-sm font-medium text-text-secondary">
                Categoría
              </th>
              <th className="text-left p-4 text-sm font-medium text-text-secondary">
                Precio
              </th>
              <th className="text-left p-4 text-sm font-medium text-text-secondary">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-border hover:bg-muted/50"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary text-sm">
                        {product.title}
                      </p>
                      <p className="text-text-secondary text-xs line-clamp-1">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {product.category}
                  </span>
                </td>
                <td className="p-4">
                  <span className="font-semibold text-text-primary">
                    ${parseFloat(product.price).toFixed(2)}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onView(product)}
                      className="h-8 w-8"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onEdit(product)}
                      className="h-8 w-8"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onDelete(product.id)}
                      className="h-8 w-8 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between p-4 border-t border-border">
          <p className="text-sm text-text-secondary">
            Mostrando {startIndex + 1} a {Math.min(endIndex, products.length)}{" "}
            de {products.length} productos
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>
            <span className="text-sm text-text-secondary px-3">
              Página {currentPage} de {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Siguiente
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
