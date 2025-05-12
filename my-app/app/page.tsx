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

        <div className="absolute inset-0 grid grid-cols-2 gap-8 place-items-center text-center text-black px-4">
          <div className="p-4">
            {/* Left Side Content */}
            Left Side
          </div>
          <div className="p-4 flex flex-col items-center gap-4">
            <h1 className="text-3xl font-light leading-tight tracking-[0.15em]">
              A sweet aroma, a reflection of His love
            </h1>
            <p>A sweet aroma, a reflection of His love</p>
            <ShopNowButton />
          </div>
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
