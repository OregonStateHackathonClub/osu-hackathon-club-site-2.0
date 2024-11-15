import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ButtonProps {
  aboutRef: React.RefObject<HTMLDivElement>
  sponsorsRef: React.RefObject<HTMLDivElement>
  faqRef: React.RefObject<HTMLDivElement>
}

export const Navbar = ({ aboutRef, sponsorsRef, faqRef }: ButtonProps) => {
  return (
    <div className="fixed top-4 left-4 w-[calc(100vw-32px)] flex items-center justify-between p-4 border rounded bg-background">
      <Image src="/images/RightJellyBean.png" width={48} height={48} alt="logo"/>
      <div className="flex gap-4">
        <Button 
          variant="outline" 
          onClick={() => {aboutRef.current?.scrollIntoView({ behavior: "smooth" })}}
        >About</Button>
        <Button 
          variant="outline" 
          onClick={() => {sponsorsRef.current?.scrollIntoView({ behavior: "smooth" })}}
        >Sponsors</Button>        
        <Button 
          variant="outline" 
          onClick={() => {faqRef.current?.scrollIntoView({ behavior: "smooth" })}}
        >FAQ</Button>
        <Link href="/apply"><Button variant="outline">Apply</Button></Link>
      </div>
    </div>
  )
}