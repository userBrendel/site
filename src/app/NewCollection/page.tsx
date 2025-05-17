import ProductCardHome from "../components/cards/ProductCardHome";
import { readGenderProduct } from "../utils/default/readEntities";


export default async function NewCollectionPage() {
  const { products: productsForHer, productsError: productsForHerError } =
    await readGenderProduct("Her");

  return (
    <section>
      <div className="mt-40 mb-10 px-20">
        <h1 className="text-4xl font-bold" style={{ letterSpacing: '5px' }}>
          NEW <br /> COLLECTION
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-20">
        {productsForHer?.length ? (
          productsForHer.map((product) => (
            <ProductCardHome
              key={product.id}
              image={"/perfume_default.png"}
              name={product.name}
              price={product.price}
            />
          ))
        ) : (
          <p className="col-span-full text-center">No products found.</p>
        )}
      </div>
    </section>
  );
}
