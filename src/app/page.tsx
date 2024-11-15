"use client"

import { useRef } from "react";
import Link from "next/link";

import { GridAnimation } from "@/components/animation";
import { ChevronButton } from "@/components/chevron";
import { Navbar } from "@/components/navbar";
import { Countdown } from "@/components/countdown";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Home = () => {

  const about = useRef(null)
  const sponsors = useRef(null)
  const faq = useRef(null)

  return (
    <>
      <Navbar aboutRef={about} sponsorsRef={sponsors} faqRef={faq}/>
      <div className="w-screen h-screen flex items-center justify-center">
        <GridAnimation />
        <ChevronButton targetRef={about}/>
      </div>
      <div ref={about} className="w-screen h-screen flex flex-col items-center justify-center">
        <span>Oregon State&apos;s Biggest Hackathon</span>
        <Countdown targetDate={new Date(1732327200 * 1000)} />
      </div>
      <div ref={sponsors} className="w-screen h-screen flex flex-col gap-8 items-center justify-center">
        <span>Sponsors</span>
        <div className="flex flex-wrap gap-12 w-screen justify-center">
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>Sponsor name</CardTitle>
              <CardDescription>Sponsor description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>(Sponsor img)</p>
            </CardContent>
            <CardFooter>
              <p>Sponsor footer</p>
            </CardFooter>
          </Card>
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>Sponsor name</CardTitle>
              <CardDescription>Sponsor description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Sponsor content</p>
            </CardContent>
            <CardFooter>
              <p>Sponsor footer</p>
            </CardFooter>
          </Card>
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>Sponsor name</CardTitle>
              <CardDescription>Sponsor description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Sponsor content</p>
            </CardContent>
            <CardFooter>
              <p>Sponsor footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="/sponsors">Interested in becoming a sponsor?</Link>
          <Link href="/dashboard">Already a sponsor?</Link>
        </div>
      </div>
      <div ref={faq} className="w-screen h-screen flex flex-col items-center justify-center">
        <span>FAQ</span>
      </div>
    </>
  );
}

export default Home;