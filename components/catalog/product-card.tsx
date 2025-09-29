import { Product } from "@/lib/types";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <div className="group bg-background rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary-100 hover:border-primary-200 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-primary-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />

        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-secondary text-white text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-text-primary text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        <p className="text-text-secondary text-xs mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-text-primary">
              ${parseFloat(product.price).toFixed(2)}
            </span>
          </div>

          <button className="p-2 bg-primary hover:bg-primary-600 text-white rounded-lg transition-colors group/btn">
            <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
