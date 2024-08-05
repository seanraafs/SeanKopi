"use client";
import { useEffect } from "react";
// Components
import Hero from "@/components/Hero";
import Explore from "@/components/Explore";
import About from "@/components/About";

const Home = () => {
  // add locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default;
      new locomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore/>
      <About/>
      {/* temp div */}
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default Home;
