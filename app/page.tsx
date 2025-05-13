"use client";

import Image from "next/image";
import PromoBar from "./components/PromoBar";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen text-center grid grid-cols-1 md:grid-cols-2">
        {/* left */}
        <div className="h-screen md:h-full w-full px-6 md:pt-24 md:px-14 flex flex-col gap-10 items-center justify-center">
          <h1 className="text-3xl">
            In the beginning, when the world was void and formless, a whisper of
            creation filled the air—Let There Be Fragrance.
          </h1>

          <Image
            src="/perfume.png"
            alt="perfume bottle"
            priority
            width={250}
            height={250}
          />
        </div>

        {/* right */}
        <div
          className="h-screen md:h-full w-full px-6 md:pb-24 md:px-14 flex flex-col gap-10 items-center justify-center md:justify-end bg-cover bg-center"
          style={{ backgroundImage: "url('home_clouds.png')" }}
        >
          <div>
            <h1 className="text-4xl">
              A sweet aroma, a reflection of His love
            </h1>
            <p className="text-xl">A sweet aroma, a reflection of His love</p>
          </div>
          <Button text="Shop Now" href="/shop" />
        </div>
      </section>

      <PromoBar
        text={
          "🔥 Promotion • New Fragrance Launch • 20% Off All Orders • Limited Time Offer • Shop Now"
        }
      />

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
    </>
  );
}
