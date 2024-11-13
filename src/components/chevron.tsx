import { ChevronsDown } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ButtonProps {
  targetRef: React.RefObject<HTMLDivElement>
}

export const ChevronButton = ({ targetRef }: ButtonProps) => {
  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="absolute top-2/3"
      onClick={() => {targetRef.current?.scrollIntoView({ behavior: "smooth" })}}
    >
      <ChevronsDown />
    </Button>
  )
}
