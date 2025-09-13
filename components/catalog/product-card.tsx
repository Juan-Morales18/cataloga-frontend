import { Product } from "@/lib/types";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />

        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {product.title}
        </h3>

        <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">
              ${parseFloat(product.price).toFixed(2)}
            </span>
          </div>

          <button className="p-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors group/btn">
            <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
