import { redirect } from "next/navigation"

import { getCurrentSession, logout } from "@/lib/auth/session"
import { prisma } from "@/lib/prisma"

import { AuthPage } from "@/components/auth"
import { ApplicationForm } from "@/components/form"
import { LogoutButton } from "@/components/logout"

const Profile = async() => {
  
  const { user } = await getCurrentSession()

  if (!user) return <AuthPage />

  const application = await prisma.application.findUnique({
    where: { userId: user.id }
  })

  if (!application) redirect("/apply")

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LogoutButton />
      <div>Welcome back {user.name}</div>
      <div>Congrats, you have submitted your application!</div>

      {/*  could preview their application here
      <ApplicationForm 
        name={user.name}
        email={user.email}
        defaultValues={{
          university: application.university,
          questionProject: application.questionProject,
          questionFact: application.questionFact,
          resume: undefined
        }}
        isDisabled={true}
      /> */}
    </div>
  )
}

export default Profile