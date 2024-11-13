import Image from "next/image"
import { ApplyButton } from "./apply"

export const Navbar = () => {
  return (
    <div className="fixed top-4 left-4 w-[calc(100vw-32px)] flex items-center justify-between p-4 border rounded bg-background">
      <Image src="/images/RightJellyBean.png" width={48} height={48} alt="logo"/>
      <ApplyButton />
    </div>
  )
}