import React from 'react';
import FilledButton from '../components/ui/FilledButton';

const Product = () => {
  return (
    <section className="max-w-4xl mx-auto py-40 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src="/perfume_default.png"
            alt="Perfume"
            className="w-full aspect-square object-cover shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Perfume Name</h1>

            <div className="grid grid-cols-2 text-lg mb-6 max-w-xs gap-3">
              <h1 className="border rounded-3xl flex items-center justify-center h-10 px-4">Her</h1>
              <h1 className="border rounded-3xl flex items-center justify-center h-10 px-4">EDP</h1>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Experience the allure of our signature fragrance, blending floral elegance with warm, woody notes. Perfect for evening wear or a special occasion.
            </p>
          </div>

          {/* Price & Add to Bag */}
          <div className="flex items-center mt-4 text-2xl">
            <FilledButton>Add To Bag</FilledButton>
            <div className="text-xl font-semibold ml-10">AED 50.00</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
