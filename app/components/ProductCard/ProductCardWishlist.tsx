import { Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import FilledButton from "../Button/FilledButton";

type ProductCardWishlistProps = {
  image: string;
  name: string;
  price: number;
  onClickHeart?: () => void;
  onClickAddToCart?: () => void;
};

export default function ProductCardWishlist({
  image,
  name,
  price,
  onClickHeart,
  onClickAddToCart,
}: ProductCardWishlistProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  function IncrementQuantity() {
    setQuantity((q) => q + 1);
  }

  function DecrementQuantity() {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  }

  const sizes = ["50 ml", "80 ml", "100 ml"];

  return (
    <section className="flex gap-8 items-center w-full">
      <div
        className="w-48 h-48 bg-cover bg-center border flex justify-end items-start p-2 shrink-0"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Heart
          onClick={onClickHeart}
          size={24}
          className="text-black cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="md:flex justify-between items-center w-full">
          <p className="text-2xl font-semibold">{name}</p>
          <p className="text-gray-700 text-sm whitespace-nowrap">
            Dhs. {price}.00
          </p>
        </div>

        <div className="flex gap-4 items-center">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`text-sm cursor-pointer px-2 py-1 border transition-[box-shadow,scale] hover:shadow-lg hover:scale-105 duration-300 ${
                selectedSize === size ? "bg-black text-white" : "text-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-sm">Quantity: {quantity}</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={IncrementQuantity}
              className="border p-1 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Plus size={16} />
            </button>
            <button
              onClick={DecrementQuantity}
              className="border p-1 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Minus size={16} />
            </button>
          </div>
        </div>

        <FilledButton onClick={onClickAddToCart}>Add To Bag</FilledButton>
      </div>
    </section>
  );
}
