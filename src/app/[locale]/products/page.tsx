"use client";

import ProductList from "@/features/products/components/productList";

export default function List() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">لیست محصولات</h1>
      <ProductList />
    </div>
  );
}
