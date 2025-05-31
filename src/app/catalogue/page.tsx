import { readAllProducts } from "./actions";
import CatalogueClient from "./components/CatalogueClient";

export default async function Catalogue() {
  const { products, productsError } = await readAllProducts();

  return (
    <main className="py-48 px-6 md:px-16 lg:px-48 space-y-8">
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-3xl text-center">Catalogue</h1>
        <div className="flex-grow border-t border-black" />
      </div>

      <CatalogueClient
        products={products ?? []}
        productsError={productsError}
      />
    </main>
  );
}
