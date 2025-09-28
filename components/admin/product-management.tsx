"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { ProductTable } from "./product-table";
import { ProductForm } from "./product-form";
import { ProductDialog } from "./product-dialog";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/actions/products";
import { useActionState } from "react";

interface ProductManagementProps {
  products: Product[];
}

export function ProductManagement({
  products: initialProducts,
}: ProductManagementProps) {
  const [products, setProducts] = useState(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  const [viewingProduct, setViewingProduct] = useState<Product | undefined>();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [createState, createAction] = useActionState(() => {}, null);
  const [updateState, updateAction] = useActionState(() => {}, null);
  const [deleteState, deleteAction] = useActionState(() => {}, null);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateProduct = async (data: any) => {
    setIsLoading(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    setIsLoading(false);
  };

  const handleUpdateProduct = async (data: any) => {
    if (!editingProduct) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("id", editingProduct.id);
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    setIsLoading(false);
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este producto?"))
      return;
  };

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
          onSubmit={editingProduct ? handleUpdateProduct : handleCreateProduct}
          onCancel={handleCancelForm}
          isLoading={isLoading}
        />
      )}

      {/* Product Table */}
      <ProductTable
        products={filteredProducts}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
        onView={handleViewProduct}
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
