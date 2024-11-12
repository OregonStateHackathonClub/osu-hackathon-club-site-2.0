import { getCurrentSession } from "@/lib/auth/session";
import { ApplicationForm } from "@/components/form"
import { AuthPage } from "@/components/auth";

const Apply = async() => {
  const { user } = await getCurrentSession();

  if (!user) return <AuthPage />
  
  return (
    <div className="flex items-center justify-center">
      <ApplicationForm />
    </div>
  )
}

export default Apply