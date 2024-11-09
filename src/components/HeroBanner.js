import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[calc(100vh-64px)]">
      <img
        src="/banner.png"
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroBanner;