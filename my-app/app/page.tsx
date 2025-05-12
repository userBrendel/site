import Image from "next/image";
import ShopNowButton from "./components/ShopNowButton";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import PromoBar from "./components/PromoBar";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Landing Section */}
      <div className="relative w-full h-[700px]">
        {/* Background Image */}
        <Image
          src="/landing.png"
          alt="Landing page background"
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
          priority
        />

        {/* Header */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Header />
        </div>

        <div className="absolute top-2/3 left-30 transform -translate-x-1/2 -translate-y-1/2 z-1 text-center text-black w-full max-w-7xl px-4 mx-auto py-16 ">
          <h1 className="text-3xl font-light mb-6 leading-tight tracking-[0.15em]">
            A sweet aroma, a reflection of His love <br /> - A sweet aroma
          </h1>
          <ShopNowButton />
        </div>
      </div>

      <PromoBar />
      {/* Page Content Below */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mb-4 mt-20">
            POPULAR <br />
            FRAGRANCE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add product cards here */}
          </div>
        </div>
      </section>
    </main>
  );
}
