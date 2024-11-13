"use client"

import { useRef } from "react";
import { GridAnimation } from "@/components/animation";
import { ChevronButton } from "@/components/chevron";
import { Navbar } from "@/components/navbar";
import { Countdown } from "@/components/countdown";

const Home = () => {

  const next = useRef(null)
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center">
        <GridAnimation />
        <ChevronButton targetRef={next}/>
      </div>
      <div ref={next} className="w-screen h-screen flex flex-col items-center justify-center">
        <span>Oregon State's Biggest Hackathon</span>
        <Countdown targetDate={new Date(1732327200 * 1000)} />
      </div>
      
    </>
  );
}

export default Home;