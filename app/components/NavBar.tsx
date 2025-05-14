"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Heart, ShoppingBag, User } from "lucide-react";
import WishlistSideBar from "./WishlistSidebar";
import NavSideBar from "./NavSideBar";

export default function Header() {
  const [isNavSideBarOpen, setNavSideBarOpen] = useState(false);
  const [isWishListOpen, setWishlistOpen] = useState(false);
  const [isShopOpen, setShopOpen] = useState(false);

  const closePanels = () => {
    setNavSideBarOpen(false);
    setWishlistOpen(false);
  };

  return (
    <nav className="px-12 py-10 relative z-100 w-full flex justify-between items-center">
      {/* left */}
      <div className="flex items-center space-x-6 text-black">
        <button
          onClick={() => {
            setNavSideBarOpen(true);
            setWishlistOpen(false);
          }}
          className="text-black flex items-center"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Ecommerce Logo"
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* right */}
      <div className="flex items-center space-x-6 text-black">
        <div className="relative group flex items-center">
          <form
            action="/search"
            method="get"
            className="flex items-center w-full"
          >
            <input
              type="text"
              name="query"
              placeholder="Search fragrance"
              className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out text-sm text-gray-600 w-full border-none outline-none"
            />
            <Search
              size={24}
              className="text-black group-hover:text-gray-700 transition-colors duration-300"
            />
          </form>
          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300" />
        </div>

        {/* wishlist */}
        <button
          onClick={() => {
            setWishlistOpen(true);
            setNavSideBarOpen(false);
          }}
          className="text-black flex items-center"
        >
          <Heart size={24} />
        </button>

        <Link href="/cart">
          <ShoppingBag size={24} />
        </Link>
        <Link href="/signin">
          <User size={24} />
        </Link>
      </div>

      {(isNavSideBarOpen || isWishListOpen) && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={closePanels}
        />
      )}

      <NavSideBar
        isNavSideBarOpen={isNavSideBarOpen}
        closePanels={closePanels}
        isShopOpen={isShopOpen}
        setShopOpen={setShopOpen}
      />

      <WishlistSideBar
        isWishListOpen={isWishListOpen}
        closePanels={closePanels}
      />
    </nav>
  );
}
