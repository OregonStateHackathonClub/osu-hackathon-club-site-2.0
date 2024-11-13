import { logout } from "@/lib/auth/session";
import { Button } from "@/components/ui/button"

export const LogoutButton = () => {
  return (
    <form action={logout}>  
      <Button variant="outline" type="submit" className="absolute top-4 right-4">Logout</Button>
    </form>
  )
}