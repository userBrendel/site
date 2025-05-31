"use client";

import { useState, useEffect } from "react";
import ProductCardHome from "../../../components/cards/ProductCardHome";
import { useSearchParams, useRouter } from "next/navigation";

type CatalogueClientProps = {
  products: any[];
  productsError: any;
};

export default function CatalogueClient({ products }: CatalogueClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [sortBy, setSortBy] = useState("alphabetical: a-z");
  const [filterBy, setFilterBy] = useState("all");
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    const sort = searchParams.get("sort") ?? "a-z";
    const filter = searchParams.get("filter") ?? "all";

    setSortBy(sort.toLowerCase());
    setFilterBy(filter.toLowerCase());
  }, [searchParams]);

  useEffect(() => {
    let result = [...products];

    if (filterBy !== "all") {
      result = result.filter((p) => {
        const gender = p.gender?.toLowerCase().trim();
        const concentration = p.concentration?.toLowerCase().trim();
        const collection = p.metadata?.collection?.toLowerCase().trim();

        if (filterBy === "edp") return concentration === "eau de parfum";
        if (filterBy === "edt") return concentration === "eau de toilette";
        if (filterBy === "for her") return gender === "her";
        if (filterBy === "for him") return gender === "him";
        if (filterBy === "unisex") return gender === "unisex";
        if (filterBy === "2025 collection") return collection === "2025";
        return true;
      });
    }

    switch (sortBy) {
      case "a-z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low to high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "high to low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "best selling":
        result.sort((a, b) => (b.sales ?? 0) - (a.sales ?? 0));
        break;
    }

    setFiltered(result);
  }, [sortBy, filterBy, products]);

  function handleSortChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`/catalogue?${params.toString()}`);
  }

  function handleFilterChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", value);
    router.push(`/catalogue?${params.toString()}`);
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleFilterChange("all")}
            className={`p-2 text-sm border ${
              filterBy === "all" && "bg-black text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("2025 collection")}
            className={`p-2 text-sm border ${
              filterBy === "2025 collection" && "bg-black text-white"
            }`}
          >
            2025 Collection
          </button>
          <button
            onClick={() => handleFilterChange("offer")}
            className={`p-2 text-sm border ${
              filterBy === "offer" && "bg-black text-white"
            }`}
          >
            Offer
          </button>
          <button
            onClick={() => handleFilterChange("for him")}
            className={`p-2 text-sm border ${
              filterBy === "for him" && "bg-black text-white"
            }`}
          >
            For Him
          </button>
          <button
            onClick={() => handleFilterChange("for her")}
            className={`p-2 text-sm border ${
              filterBy === "for her" && "bg-black text-white"
            }`}
          >
            For Her
          </button>
          <button
            onClick={() => handleFilterChange("unisex")}
            className={`p-2 text-sm border ${
              filterBy === "unisex" && "bg-black text-white"
            }`}
          >
            Unisex
          </button>
          <button
            onClick={() => handleFilterChange("edp")}
            className={`p-2 text-sm border ${
              filterBy === "edp" && "bg-black text-white"
            }`}
          >
            Eau de Parfum
          </button>
          <button
            onClick={() => handleFilterChange("edt")}
            className={`p-2 text-sm border ${
              filterBy === "edt" && "bg-black text-white"
            }`}
          >
            Eau de Toilette
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <span>Sort By: </span>
          <div className="relative">
            <select
              className="w-full border text-sm p-2 pr-10 focus:outline-none focus:ring-0 appearance-none"
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="a-z">Alphabetical: A-Z</option>
              <option value="z-a">Alphabetical: Z-A</option>
              <option value="low to high">Price: Low to High</option>
              <option value="high to low">Price: High to Low</option>
              <option value="best selling">Best Selling</option>
            </select>

            <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-xs">
              ▼
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        {filtered?.map((product) => {
          return (
            <ProductCardHome
              key={product.id}
              image={"/perfume_default.png"}
              name={product.name}
              price={product.price}
              href={`/product/${product.id}`}
            />
          );
        })}
      </div>
    </>
  );
}
