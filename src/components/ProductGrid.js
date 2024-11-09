import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "All Products"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">All Products</h1>

      <div
        style={{ backgroundColor: "#F7F6F0" }}
        className="rounded-2xl p-8 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className="w-[300px] h-[400px] mb-4">
                <img
                  src={product.PictureName}
                  alt={product.Name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900">
                  {product.Name}
                </h2>
                <p className="text-md text-gray-600 mt-2">
                  Rp. {product.Price}
                </p>
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
