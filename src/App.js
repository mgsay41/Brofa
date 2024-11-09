import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import SeasonCollections from "./components/SeasonCollections";
import ProductGrid from "./components/ProductGrid";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <SeasonCollections />
                <ProductGrid />
                <Signup />
              </>
            }
          />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
