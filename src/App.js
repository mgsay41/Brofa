import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import SeasonCollections from "./components/SeasonCollections";
import ProductGrid from "./components/ProductGrid";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroBanner />
        <SeasonCollections />
        <ProductGrid />
        <Signup/>
        <main className="container mx-auto px-4">
          {/* Your main content here */}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
