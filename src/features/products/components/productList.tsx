import ProductCard from "@/components/shared/ProductCard";
import React from "react";

const mockProducts = [
  {
    id: "1",
    name: "گوشی آیفون ۱۳",
    price: 45000000,
    image: "/images/iphone13.jpg",
    seller: "دیجی‌استور",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "2",
    name: "لپ‌تاپ مک‌بوک پرو",
    price: 98000000,
    image: "/images/macbook.jpg",
    seller: "اپل‌مارکت",
    rating: 4.8,
    reviews: 85,
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
