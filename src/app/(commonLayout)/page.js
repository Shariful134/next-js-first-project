"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  };
  return (
    <div className="text-center">
      <h2 className="text-3xl">This is Home routes</h2>

      <button onClick={handleNavigation} className="btn">
        Dashboard
      </button>
    </div>
  );
};

export default Home;
