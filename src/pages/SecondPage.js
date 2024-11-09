import Footer from "../components/Footer";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function SecondPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-10">
        <div className="relative w-full max-w-2xl h-[400px] mx-4">
          <Image
            src="/second.png"
            alt="Second page image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
