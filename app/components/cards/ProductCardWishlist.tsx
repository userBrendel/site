import { Heart, Minus, Plus, Trash } from "lucide-react";
import { useState } from "react";
import FilledButton from "../ui/FilledButton";

type ProductCardWishlistProps = {
  image: string;
  name: string;
  price: number;
  onClickHeart?: () => void;
  onClickAddToCart?: () => void;
  onClickTrash?: () => void;
};

export default function ProductCardWishlist({
  image,
  name,
  price,
  onClickHeart,
  onClickAddToCart,
  onClickTrash,
}: ProductCardWishlistProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("Select value");

  function IncrementQuantity() {
    setQuantity((q) => q + 1);
  }

  function DecrementQuantity() {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  }

  const sizes = ["50 ml", "80 ml", "100 ml"];

  return (
    <section className="flex gap-4 items-center w-full">
      <div className="flex flex-col items-center space-y-2">
        <div
          className="w-32 h-32 bg-cover bg-center border flex justify-end items-start p-2 shrink-0"
          style={{ backgroundImage: `url(${image})` }}
        >
          <Heart
            onClick={onClickHeart}
            size={24}
            className="text-black cursor-pointer"
          />
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-sm w-6 text-center">x{quantity}</span>
          <div className="flex gap-2 items-center">
            <button
              onClick={DecrementQuantity}
              className="border p-1 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Minus size={16} />
            </button>
            <button
              onClick={IncrementQuantity}
              className="border p-1 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Plus size={16} />
            </button>
          </div>
          <button
            onClick={onClickTrash}
            className="border p-1 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Trash size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="md:flex justify-between items-center w-full">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-gray-700 text-sm whitespace-nowrap">
            Dhs. {price}.00
          </p>
        </div>

        <select
          onChange={(e) => setSelectedSize(e.target.value)}
          value={selectedSize}
          className="w-full border text-sm p-2 focus:outline-none focus:ring-none"
        >
          <option disabled value="Select size">
            Select size
          </option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <FilledButton onClick={onClickAddToCart} size="sm">
          Add To Bag
        </FilledButton>
      </div>
    </section>
  );
}
