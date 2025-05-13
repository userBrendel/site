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
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="px-12 py-8 relative z-100 w-full flex justify-between items-center">
      {/* left */}
      <div className="flex items-center space-x-6 text-black">
        <button
          onClick={() => setIsOpen(true)}
          className="text-black flex items-center"
        >
          <Menu size={28} />
        </button>
        <Link href="/account" className="invisible">
          <User size={24} />
        </Link>
        <Link href="/wishlist" className="invisible">
          <Heart size={24} />
        </Link>
        <Link href="/cart" className="invisible">
          <ShoppingBag size={24} />
        </Link>
      </div>

      {/* logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Ecommerce Logo"
          width={50}
          height={50}
          priority
        />
      </Link>

      {/* right */}
      <div className="flex items-center space-x-6 text-black">
        <Link href="/search">
          <Search size={24} />
        </Link>
        <Link href="/account">
          <User size={24} />
        </Link>
        <Link href="/wishlist">
          <Heart size={24} />
        </Link>
        <Link href="/cart">
          <ShoppingBag size={24} />
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
    </header>
  );
}
