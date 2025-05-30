import { X, ChevronDown } from "lucide-react";
import Link from "next/link";

type SideBarNavProps = {
  isNavSideBarOpen: boolean;
  closePanels: () => void;
  isCatalogueOpen: boolean;
  setShopOpen: (open: boolean) => void;
};

export default function SideBarNav({
  isNavSideBarOpen,
  closePanels,
  isCatalogueOpen,
  setShopOpen,
}: SideBarNavProps) {
  const hoverClass =
    "relative pl-3 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-black before:scale-y-0 hover:before:scale-y-100 before:origin-top before:transition-transform before:duration-300";

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 w-64 bg-white backdrop-blur-md transform ${
        isNavSideBarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-600 z-100 overflow-hidden`}
    >
      <div className="flex justify-end p-4">
        <button onClick={closePanels} className="text-black">
          <X size={28} />
        </button>
      </div>

      <div className="flex flex-col space-y-8 p-6 pt-2 text-black text-lg">
        <Link href="/" onClick={closePanels} className={hoverClass}>
          Home
        </Link>
        <Link href="/about" onClick={closePanels} className={hoverClass}>
          About Us
        </Link>
        <Link href="/contact" onClick={closePanels} className={hoverClass}>
          Contact
        </Link>

        <div>
          <button
            onClick={() => setShopOpen(!isCatalogueOpen)}
            className={`flex justify-between items-center w-full ${hoverClass}`}
          >
            <span>Catalogue</span>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                isCatalogueOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isCatalogueOpen && (
            <div className="mt-2 ml-2 flex flex-col text-base pl-3 space-y-2">
              <Link
                href="/catalogue"
                onClick={closePanels}
                className={hoverClass}
              >
                All
              </Link>
              <Link
                href="/catalogue?filter=2025+collection"
                onClick={closePanels}
                className={hoverClass}
              >
                New Collection
              </Link>
              <Link
                href="/catalogue?sort=best+selling"
                onClick={closePanels}
                className={hoverClass}
              >
                Bestseller
              </Link>
              <Link
                href="/catalogue?filter=for+her"
                onClick={closePanels}
                className={hoverClass}
              >
                For Her
              </Link>
              <Link
                href="/catalogue?filter=for+him"
                onClick={closePanels}
                className={hoverClass}
              >
                For Him
              </Link>
              <Link
                href="/catalogue?filter=unisex"
                onClick={closePanels}
                className={hoverClass}
              >
                Unisex
              </Link>
            </div>
          )}
        </div>

        <Link href="/faq" onClick={closePanels} className={hoverClass}>
          FAQ
        </Link>
      </div>
    </div>
  );
}
