import React from "react";

interface productCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  seller: string;
  rating: number;
  reviews: number;
}
const ProductCard: React.FC<productCardProps> = ({
  id,
  name,
  price,
  image,
  seller,
  rating,
  reviews,
}) => {
  return (
    <div className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition-all">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h2 className="text-lg font-semibold mb-1 truncate">{name}</h2>
      <p className="text-sm text-gray-600">فروشنده: {seller}</p>
      <div className="flex items-center gap-2 text-yellow-500 text-sm my-2">
        <span>{"★".repeat(Math.round(rating))}</span>
        <span className="text-gray-500">({reviews} نظر)</span>
      </div>
      <p className="text-lg font-bold text-green-600">
        {price.toLocaleString()} تومان
      </p>
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all">
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default ProductCard;
