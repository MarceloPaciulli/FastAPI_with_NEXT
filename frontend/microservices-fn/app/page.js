import React from "react";
import Link from 'next/link';


const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-black p-8 rounded shadow-md">
        <h1 className="text-xl font-bold mb-4"></h1>
        <div className="flex space-x-4">
          <Link href="/login">
          <button className="button button-container">
            Login user
          </button>
          </Link>
          <Link href="/register">
          <button className="button button-container">
            Create user
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
