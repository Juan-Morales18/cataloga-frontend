"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { ProductTable } from "./product-table";
import { ProductForm } from "./product-form";
import { ProductDialog } from "./product-dialog";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProductManagementProps {
  products: Product[];
}

export function ProductManagement({
  products: initialProducts,
}: ProductManagementProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  const [viewingProduct, setViewingProduct] = useState<Product | undefined>();
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleViewProduct = (product: Product) => {
    setViewingProduct(product);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingProduct(undefined);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <Input
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtrar
          </Button>
        </div>

        <Button onClick={() => setShowForm(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Agregar Producto
        </Button>
      </div>

      {/* Product Form */}
      {showForm && (
        <ProductForm
          product={editingProduct}
          onSubmit={() => {}}
          onCancel={handleCancelForm}
        />
      )}

      {/* Product Table */}
      <ProductTable
        products={initialProducts}
        onEdit={handleEditProduct}
        onView={handleViewProduct}
        onDelete={() => {}}
      />

      {/* Product Dialog */}
      {viewingProduct && (
        <ProductDialog
          product={viewingProduct}
          onClose={() => setViewingProduct(undefined)}
        />
      )}
    </div>
  );
}
