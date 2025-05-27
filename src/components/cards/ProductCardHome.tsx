"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

type ProductCardHomeProps = {
  image: string;
  name: string;
  price: number;
  href: string;
};

export default function ProductCardHome({
  image,
  name,
  price,
  href,
}: ProductCardHomeProps) {
  function onClickHeart() {}

  return (
    <Link
      className="flex flex-col gap-4 justify-center items-center w-full hover:scale-105 transition-hover duration-300"
      href={href}
    >
      <div
        className="w-full aspect-square bg-cover bg-center border p-4 flex justify-end items-start"
        style={{
          backgroundImage: `url(${image ? image : "/perfume_default.png"})`,
        }}
      >
        <Heart
          size={24}
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClickHeart();
          }}
        />
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-gray-700 text-md">AED {price}.00</p>
      </div>
    </Link>
  );
}
