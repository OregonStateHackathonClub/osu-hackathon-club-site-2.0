import { cookies } from 'next/headers'
import { validateSessionToken } from '@/lib/auth/session'
import { prisma } from "@/lib/prisma"
import { uploadFile } from "@/lib/storage"

export async function POST(request: Request): Promise<Response> {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('session')?.value

  if (!sessionToken) {
    return new Response('Unauthorized', { status: 401 })
  }
  const { user } = await validateSessionToken(sessionToken)
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  const existingApplication = await prisma.application.findUnique({
    where: { userId: user.id }
  })

  if (existingApplication) {
    return new Response('You have already submitted an application', { 
      status: 400 
    })
  }

  const formData = await request.formData()

  const { path, url } = await uploadFile(formData.get("resume") as File)

  const application = await prisma.application.create({
    data: {
      userId: user.id,
      university: formData.get("university") as string,
      resumePath: path,
      resumeUrl: url,
    }
  })

  return Response.json(application)
}