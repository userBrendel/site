import ProductCardHome from "@/src/components/cards/ProductCardHome";
import { readSingleProduct, readSuggestedPerfumes } from "./actions";
import ProductReviewPolicyClient from "./components/ProductReviewPolicyClient";
import ProductMainClient from "./components/ProductMainClient";
import ErrorMessage from "@/src/components/layout/ErrorMessage";

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { product, productError } = await readSingleProduct(id);
  const { suggested, suggestedError } = await readSuggestedPerfumes(id);

  return (
    <main className="min-h-125 space-y-48 py-48">
      {productError ? (
        <section className="px-6 md:px-16 lg:px-48 space-y-8">
          <ErrorMessage>
            Fragrance not found.
            <br />
            Error: {productError.message}
          </ErrorMessage>
        </section>
      ) : (
        <>
          <section className=" px-6 md:px-16 lg:px-48 space-y-8">
            <ProductMainClient product={product} />
          </section>

          <section className="px-6 md:px-16 lg:px-48 space-y-8">
            <ProductReviewPolicyClient />
          </section>

          {suggestedError ? (
            <section className="px-6 md:px-16 lg:px-48 space-y-8">
              <ErrorMessage>
                There was an error suggesting other fragrances.
                <br />
                Error: {suggestedError.message}
              </ErrorMessage>
            </section>
          ) : (
            suggested &&
            suggested.length > 0 && (
              <>
                <section className="px-6 md:px-16 lg:px-48 space-y-8">
                  <div className="flex items-center gap-4">
                    <h1 className="font-bold text-3xl text-center">
                      Suggestions
                    </h1>
                    <div className="flex-grow border-t border-black" />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                    {suggested?.map((product) => (
                      <ProductCardHome
                        key={product.id}
                        image={"/perfume_default.png"}
                        name={product.name}
                        price={product.price}
                        href={`/product/${product.id}`}
                      />
                    ))}
                  </div>
                </section>
              </>
            )
          )}
        </>
      )}
    </main>
  );
}
