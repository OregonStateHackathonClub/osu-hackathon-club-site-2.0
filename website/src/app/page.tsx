"use client"

import { useRef } from "react";
import { GridAnimation } from "@/components/animation"
import { ApplyButton } from "@/components/apply";
import { ChevronButton } from "@/components/chevron";

export default function Home() {

  const next = useRef(null)
  return (
    <>
      <ApplyButton />
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
