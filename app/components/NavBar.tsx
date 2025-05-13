"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
} from "lucide-react";

const hoverClass =
  "relative pl-3 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-black before:scale-y-0 hover:before:scale-y-100 before:origin-top before:transition-transform before:duration-300";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false); // Wishlist state
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="px-12 py-10 relative z-100 w-full flex justify-between items-center">
      {/* left section */}
      <div className="flex items-center space-x-6 text-black">
        <button
          onClick={() => setIsOpen(true)}
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

      {/* right section */}
      <div className="flex items-center space-x-6 text-black">
        {/* SEARCH */}
        <div className="relative group flex items-center">
          <form action="/search" method="get" className="flex items-center w-full">
            {/* Input field for typing */}
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
          {/* Underline with hover animation */}
          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300"></span>
        </div>

        {/* Wishlist Icon with sliding effect */}
        <button
          onClick={() => setWishlistOpen(!wishlistOpen)} // Toggle wishlist
          className="text-black flex items-center"
        >
          <Heart size={24} />
        </button>

        <Link href="/cart">
          <ShoppingBag size={24} />
        </Link>
        <Link href="/account">
          <User size={24} />
        </Link>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-6 bottom-6 left-0 h-[calc(100%-4rem)] w-64 bg-white/80 backdrop-blur-md transform
          ${isOpen ? "translate-x-4" : "-translate-x-full"}
          transition-transform duration-600 ease-[cubic-bezier(0.77, 0, 0.175, 1)] z-50 rounded-xl shadow-xl overflow-hidden`}
      >
        {/* Exit Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-black">
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-6 p-6 pt-2 text-black text-lg">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={hoverClass}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={hoverClass}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={hoverClass}
          >
            Contact
          </Link>

          {/* Shop Dropdown */}
          <div>
            <button
              onClick={() => setShopOpen(!shopOpen)}
              className={`flex justify-between items-center w-full ${hoverClass}`}
            >
              <span>Shop</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  shopOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {shopOpen && (
              <div className="mt-2 ml-2 flex flex-col text-base border-l border-gray-300 pl-3 space-y-2">
                <Link
                  href="/shop"
                  onClick={() => setIsOpen(false)}
                  className={hoverClass}
                >
                  All
                </Link>
                <Link
                  href="/shop/new"
                  onClick={() => setIsOpen(false)}
                  className={hoverClass}
                >
                  New Collection
                </Link>
                <Link
                  href="/shop/bestseller"
                  onClick={() => setIsOpen(false)}
                  className={hoverClass}
                >
                  Bestseller
                </Link>
                <Link
                  href="/shop/for-her"
                  onClick={() => setIsOpen(false)}
                  className={hoverClass}
                >
                  For Her
                </Link>
                <Link
                  href="/shop/for-him"
                  onClick={() => setIsOpen(false)}
                  className={hoverClass}
                >
                  For Him
                </Link>
                <Link
                  href="/shop/unisex"
                  onClick={() => setIsOpen(false)}
                  className={hoverClass}
                >
                  Unisex
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/faq"
            onClick={() => setIsOpen(false)}
            className={hoverClass}
          >
            FAQ
          </Link>
        </div>
      </div>

      {/* Wishlist Sidebar with sliding effect */}
      <div
        className={`fixed top-6 bottom-6 right-0 w-64 bg-white/80 backdrop-blur-md transform 
          ${wishlistOpen ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-600 ease-[cubic-bezier(0.77, 0, 0.175, 1)] z-50 rounded-xl shadow-xl overflow-hidden`}
      >
        {/* Exit Button for Wishlist */}
        <div className="flex justify-end p-4">
          <button onClick={() => setWishlistOpen(false)} className="text-black">
            <X size={28} />
          </button>
        </div>

        {/* Wishlist Content */}
        <div className="flex flex-col space-y-6 p-6 pt-2 text-black text-lg">
          <h2 className="text-2xl">Your Wishlist</h2>
          {/* Wishlist Items (You can map over your wishlist data here) */}
          <div className="space-y-4">
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            {/* Add more items or dynamic content here */}
          </div>
        </div>
      </div>
    </header>
  );
}
