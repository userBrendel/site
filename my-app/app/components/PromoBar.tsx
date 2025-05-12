'use client';

const promoText =
  '🔥 Promotion • New Fragrance Launch • 20% Off All Orders • Limited Time Offer • Shop Now  ';

const PromoBar = () => {
  return (
    <div className="bg-black py-6 overflow-hidden whitespace-nowrap relative">
      <div className="animate-marquee flex">
        <span className="text-white text-m font-semibold mx-5">{promoText}</span>
        <span className="text-white text-m font-semibold mx-5">{promoText}</span>
         <span className="text-white text-m font-semibold mx-5">{promoText}</span>
      </div>
    </div>
  );
};

export default PromoBar;
