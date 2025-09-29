import { AdminLayout } from "@/components/admin/admin-layout";
import { getProducts } from "@/actions/products";
import { ProductManagement } from "@/components/admin/product-management";

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Productos</h1>
          <p className="text-text-secondary">
            Gestiona tu catálogo de productos
          </p>
        </div>

        <ProductManagement products={products} />
      </div>
    </AdminLayout>
  );
}
