import { Storage } from "@google-cloud/storage"

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  credentials: {
    private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL
  }
})

const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME!)

export const uploadFile = async(file: File) => {

  const fileName= `resumes/${Date.now()}-${file.name}`
  const blob = bucket.file(fileName)

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  await blob.save(buffer, {
    contentType: file.type,
    public: false
  })

  const [url] = await blob.getSignedUrl({
    action: "read",
    expires: Date.now() + 15 * 60 * 1000
  })

  return {
    path: fileName,
    url
  }
}