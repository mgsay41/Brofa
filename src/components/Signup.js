import React from "react";
import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign up successful:", result.user);
      navigate("/second-page");
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F7F6F0]">
      <div className="flex flex-col md:flex-row overflow-hidden p-8 md:p-0 max-w-5xl">
        {/* Left Section */}
        <div className="p-8 md:w-1/2 text-center">
          <h1 className="text-5xl mb-12">
            Get more benefits by Sign Up & Join Mejiwoo Community!
          </h1>
          <ul className="space-y-4 text-xl">
            <li className="flex items-center font-bold">
              <span className="mr-3">♦️</span> FREE Special Gift to a new member
            </li>
            <li className="flex items-center font-bold">
              <span className="mr-3">♦️</span> Get 2x JIWOO Points to purchase
              items
            </li>
            <li className="flex items-center font-bold">
              <span className="mr-3">♦️</span> Get special voucher code every
              month
            </li>
            <li className="flex items-center font-bold">
              <span className="mr-3">♦️</span> Claim Voucher Disc. Up To 50%
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="p-8 md:w-1/2 border-l border-black">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-center text-black placeholder-black"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-center text-black placeholder-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-center text-black placeholder-black"
            />
            <div className="flex items-center justify-between my-4">
              <hr className="w-full border-black" />
              <span className="mx-4 text-black">Or</span>
              <hr className="w-full border-black" />
            </div>
            <button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              <img
                src="/Google_Icons-09-512.webp"
                alt="Google Logo"
                className="w-6 h-6 mr-3"
              />
              SIGN UP WITH GOOGLE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
