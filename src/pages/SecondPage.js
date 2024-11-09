import React from "react";

const SecondPage = () => {
  return (
    <main className="flex-grow">
      <div className="relative w-full h-screen">
        <img
          src="/second.png"
          alt="Second Page Image"
          className="w-full h-full object-cover"
          style={{ maxHeight: "calc(100vh - 64px)" }}
        />
      </div>
    </main>
  );
};

export default SecondPage;
