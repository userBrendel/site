"use client";

import Link from "next/link";

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
};

export default function Button({ text, href, onClick }: ButtonProps) {
  return href ? (
    <Link
      href={href}
      className="btn-wide inline-block py-2.5 px-6 text-m font-semibold !text-white bg-black border border-black  hover:shadow-lg hover:scale-105 transition-all duration-300 "
    >
      {text}
    </Link>
  ) : (
    <button
      className="btn-wide inline-block py-2.5 px-6 text-m font-semibold !text-white bg-black border border-black  hover:shadow-lg hover:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
