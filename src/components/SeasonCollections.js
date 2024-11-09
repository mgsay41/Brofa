import React from 'react';

const SeasonCollections = () => {
  const categories = [
    {
      title: "Hoodie",
      image: "/hoodie.png"
    },
    {
      title: "Jacket",
      image: "/jacket.png"
    },
    {
      title: "Pullover",
      image: "/pullover.png"
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Season Collections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="group cursor-pointer">
            <div className={`relative mb-4 mx-auto ${
              index === 0 ? 'w-[398px] h-[496px]' : 'w-[402px] h-[496px]'
            }`}>
              <img
                src={category.image}
                alt={category.title}
                className={`w-full h-full ${
                  index === 0 ? 'object-cover' : 'object-contain'
                }`}
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">{category.title}</h3>
              <button className="text-sm text-gray-600 hover:text-black transition-colors">
                MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonCollections;