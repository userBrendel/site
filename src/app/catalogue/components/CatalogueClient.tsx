"use client";

import { useState, useEffect } from "react";
import ProductCardHome from "../../../components/cards/ProductCardHome";

type CatalogueClientProps = {
  products: any[];
  productsError: any;
};

export default function CatalogueClient({ products }: CatalogueClientProps) {
  const [sortBy, setSortBy] = useState("a-z");
  const [filterBy, setFilterBy] = useState("all");
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    let result = [...products];

    // FILTER
    if (filterBy !== "all") {
      result = result.filter((p) => {
        const gender = p.gender?.toLowerCase().trim();
        const concentration = p.concentration?.toLowerCase().trim();
        const collection = p.metadata.collection.toLowerCase().trim();

        if (filterBy === "edp") {
          return concentration === "eau de parfum";
        } else if (filterBy === "edt") {
          return concentration === "eau de toilette";
        } else if (filterBy === "for her") {
          return gender === "her";
        } else if (filterBy === "for him") {
          return gender === "him";
        } else if (filterBy === "unisex") {
          return gender === "unisex";
        } else if (filterBy === "2025 collection") {
          return collection === "2025";
        }
      });
    }

    // SORT
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

  return (
    <>
      <div className="flex gap-8 justify-end">
        <div className="flex gap-2 items-center">
          <span>Sort By: </span>
          <div className="relative">
            <select
              className="w-full border text-sm p-2 pr-10 focus:outline-none focus:ring-0 appearance-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="best selling">Best Selling</option>
              <option value="low to high">Price: Low to High</option>
              <option value="high to low">Price: High to Low</option>
            </select>

            <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-xs">
              ▼
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <span>Filter By:</span>
          <div className="relative">
            <select
              className="w-full border text-sm p-2 pr-10 focus:outline-none focus:ring-0 appearance-none"
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
            >
              <option value="all">All</option>
              <option value="2025 collection">2025 Collection</option>
              <option value="offer">Offer</option>
              <option value="edp">Eau de Parfum</option>
              <option value="edt">Eau de Toilette</option>
              <option value="for him">For Him</option>
              <option value="for her">For Her</option>
              <option value="unisex">Unisex</option>
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
            />
          );
        })}
      </div>
    </>
  );
}
