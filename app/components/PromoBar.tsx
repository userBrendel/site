"use client";

type PromoBarProps = {
  text: string;
};

export default function PromoBar({ text }: PromoBarProps) {
  return (
    <div className="bg-black py-6 overflow-hidden whitespace-nowrap relative">
      <div className="animate-marquee flex">
        <span className="text-white text-m font-semibold mx-5">{text}</span>
        <span className="text-white text-m font-semibold mx-5">{text}</span>
        <span className="text-white text-m font-semibold mx-5">{text}</span>
      </div>
    </div>
  );
}
