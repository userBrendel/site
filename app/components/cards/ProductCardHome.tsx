import { Heart } from "lucide-react";

type ProductCardHomeProps = {
  image: string;
  name: string;
  price: number;
  onClick?: () => void;
};

export default function ProductCardHome({
  image,
  name,
  price,
  onClick,
}: ProductCardHomeProps) {
  return (
    <section className="flex flex-col gap-4 justify-center items-center w-full max-w-75">
      <div
        className="w-full aspect-square bg-cover bg-center border p-4 flex justify-end"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Heart
          onClick={onClick}
          size={24}
          className="text-black cursor-pointer"
        />
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-gray-700 text-md">Dhs. {price}.00</p>
      </div>
    </section>
  );
}
