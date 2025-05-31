import React from 'react';

const AboutUs = () => {
  return (
    <div className="text-center  w-full md:h-screen">
      <video
        src="/aboutvid.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[80vh] object-cover mx-auto shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-6">ABOUT US</h1>
    </div>
  );
};

export default AboutUs;
