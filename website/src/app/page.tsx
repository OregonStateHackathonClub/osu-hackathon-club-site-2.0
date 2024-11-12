"use client"

import { useRef } from "react";
import { GridAnimation } from "@/components/animation";
import { ChevronButton } from "@/components/chevron";
import { Navbar } from "@/components/navbar";

const Home = () => {

  const next = useRef(null)
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center">
        <GridAnimation />
        <ChevronButton targetRef={next}/>
      </div>
      <div ref={next} className="w-screen h-screen flex items-center justify-center">
        Oregon State's Biggest Hackathon
      </div>
    </>
  );
}

export default Home;