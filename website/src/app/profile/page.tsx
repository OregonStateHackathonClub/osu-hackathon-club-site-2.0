import { redirect } from "next/navigation"

import { getCurrentSession } from "@/lib/auth/session"
import { prisma } from "@/lib/prisma"

import { AuthPage } from "@/components/auth"
import { ApplicationForm } from "@/components/form"

const Profile = async() => {
  
  const { user } = await getCurrentSession()

  if (!user) return <AuthPage />

  const application = await prisma.application.findUnique({
    where: { userId: user.id }
  })

  if (!application) redirect("/apply")

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>Welcome back {user.name}</div>
      <div>Congrats, You have submitted your application!</div>
      <ApplicationForm 
        name={user.name}
        email={user.email}
        defaultValues={{
          university: application.university,
          questionProject: application.questionProject,
          questionFact: application.questionFact,
          // Can't set file input value due to security restrictions
          resume: undefined
        }}
        isDisabled={true}  // New prop
      />
    </div>
  )
}

export default Profile