import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Etp V Neck Yellow",
      price: "Rp. 129,000",
      image: "/product1.png"
    },
    {
      id: 2,
      name: "Macaroon Dry Half",
      price: "Rp. 199,000",
      image: "/product2.png"
    },
    {
      id: 3,
      name: "Wave Stripe Haily",
      price: "Rp. 130,000",
      image: "/product3.png"
    },
    {
      id: 4,
      name: "Eve Punching Floral",
      price: "Rp. 229,000",
      image: "/product4.png"
    },
    {
      id: 5,
      name: "Floral Waffle Tee",
      price: "Rp. 119,000",
      image: "/product5.png"
    },
    {
      id: 6,
      name: "Snap Pure Blouse",
      price: "Rp. 225,000",
      image: "/product6.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">All Products</h1>
      
      <div style={{ backgroundColor: "#F7F6F0" }} className="rounded-2xl p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className="w-[300px] h-[400px] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900">{product.name}</h2>
                <p className="text-md text-gray-600 mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
        <button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 bg-white px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
          SEE MORE
          <svg 
            className="ml-2 w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default ProductGrid;
