"use client";
import Link from "next/link";

export default function ShopNowButton() {
  return (<Link
    href="/shop"
    className=" btn-wide inline-block py-2.5 px-6 text-m font-semibold !text-white bg-black border border-black  hover:shadow-lg hover:scale-105 transition-all duration-300 "
  >
    Shop Now
  </Link>
  


  );
}
