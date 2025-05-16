"use client";

import Image from "next/image";
import PromoBar from "./components/PromoBar";
import Button from "./components/Button/FilledButton";
import ArrowButton from "./components/Button/ArrowButton";
import ProductCardHome from "./components/ProductCard/ProductCardHome";
import FilledButton from "./components/Button/FilledButton";

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="w-full md:h-screen text-center grid grid-cols-1 md:grid-cols-2">
        {/* left */}
        <div className="h-screen md:h-full w-full px-6 md:pt-24 md:px-14 flex flex-col gap-10 items-center justify-center">
          <h1 className="text-3xl">
            In the beginning, when the world was void and formless, a whisper of
            creation filled the air—Let There Be Fragrance.
          </h1>

          <Image
            src="/perfume_bottle.png"
            alt="perfume bottle"
            priority
            width={250}
            height={250}
          />
        </div>

        {/* right */}
        <div
          className="h-screen md:h-full w-full px-6 md:pb-24 md:px-14 flex flex-col gap-10 items-center justify-center md:justify-end bg-cover bg-center"
          style={{ backgroundImage: "url('clouds.png')" }}
        >
          <div>
            <h1 className="text-4xl">
              A sweet aroma, a reflection of His love.
            </h1>
            <p className="text-xl">A sweet aroma, a reflection of His love.</p>
          </div>
          <Button href="/shop">Shop Now</Button>
        </div>
      </section>

      {/* marquee */}
      <PromoBar
        text={
          "🔥 Promotion • New Fragrance Launch • 20% Off All Orders • Limited Time Offer • Shop Now"
        }
      />

      {/* popular fragrance */}
      <section className="py-24 px-16 lg:px-48 space-y-8">
        <div className="flex items-center gap-8">
          <h1 className="font-bold text-3xl text-center whitespace-nowrap">
            Categories
          </h1>
          <div className="flex-grow border-t border-black-300" />
        </div>

        <br />

        <div className="flex justify-center md:justify-start">
          <ArrowButton type="right">For Her</ArrowButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
        </div>

        <br />

        <div className="text-right">
          <ArrowButton type="left">For Him</ArrowButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
        </div>

        <br />

        <div>
          <ArrowButton type="right">Unisex</ArrowButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
        </div>
      </section>

      {/* about us */}
      <section className="py-24 px-16 lg:px-48 space-y-8">
        <div className="flex items-center gap-8">
          <div className="flex-grow border-t border-black-300" />
          <h1 className="font-bold text-3xl text-center whitespace-nowrap">
            About Us
          </h1>
        </div>

        <div className="grid grid-cols-2">
          <div className="space-y-16">
            <Image
              src="/scent_studio1.png"
              alt="about"
              priority
              width={450}
              height={450}
              className="object-contain"
            />

            <div>
              <h1 className="text-xl font-bold">Vision</h1>
              <p className="text-lg">
                To awaken the senses and elevate everyday moments through the
                transformative power of fragrance, crafting a world where scent
                becomes a universal language of beauty, emotion, and identity.
              </p>
            </div>
          </div>

          <div className="space-y-36">
            <div>
              <h1 className="text-xl font-bold">Let There Be Fragrance</h1>
              <p className="text-lg">
                In the beginning, when the world was void and formless, a
                whisper of creation filled the air—Let There Be Fragrance.
              </p>
            </div>

            <div>
              <h1 className="text-xl font-bold">Mission</h1>
              <p className="text-lg">
                At Let There Be Fragrance, our mission is to create captivating,
                high-quality scents that tell stories, spark memories, and
                celebrate individuality.{" "}
              </p>
            </div>

            <div className="flex justify-end">
              <Image
                src="/scent_studio2.png"
                alt="about"
                priority
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* new collection */}
      <section className="py-24 px-16 lg:px-48 space-y-8">
        <div className="flex items-center gap-8">
          <h1 className="font-bold text-3xl text-center whitespace-nowrap">
            New Collection
          </h1>
          <div className="flex-grow border-t border-black-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
        </div>
      </section>

      {/* best seller */}
      <section className="py-24 px-16 lg:px-48 space-y-8">
        <div className="flex items-center gap-8">
          <div className="flex-grow border-t border-black-300" />
          <h1 className="font-bold text-3xl text-center whitespace-nowrap">
            Best Seller
          </h1>
          <div className="flex-grow border-t border-black-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
          <ProductCardHome
            image={"/perfume_default.png"}
            name={"Perfume name"}
            price={255}
          />
        </div>
      </section>

      {/* discover more */}
      <section className="py-24 px-16 lg:px-48 space-y-8">
        <div className="flex items-center gap-8">
          <div className="flex-grow border-t border-black-300" />
        </div>

        <div className=" grid grid-cols-2 gap-12">
          <Image
            src="/boats.png"
            alt="about"
            priority
            width={450}
            height={450}
            className="object-contain"
          />

          <div className="space-y-32">
            <div className="space-y-8">
              <h1 className="font-bold text-3xl text-center">
                DISCOVER MORE OF LTBF
              </h1>
              <p className="text-center text-lg">
                In the beginning, when the world was void and formless, a
                whisper of creation filled the air—Let There Be Fragrance.
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <label className="text-2xl">Name:</label>
                <input className="w-full border-b py-2 focus:outline-none focus:ring-0" />
              </div>

              <div>
                <label className="text-2xl">Email:</label> <br />
                <input className="w-full border-b py-2 focus:outline-none focus:ring-0" />
              </div>
            </div>

            <div className="flex justify-end">
              <FilledButton>Subscribe</FilledButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
