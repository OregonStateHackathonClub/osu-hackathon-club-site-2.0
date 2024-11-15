import { prisma } from "@/lib/prisma"
import { Application, columns } from "./columns"
import { DataTable } from "./data-table"

const getApplicants = async(): Promise<Application[]> => {
  return await prisma.application.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
        }
      }
    },
    orderBy: [
      {
        user: {
          name: "asc"
        },
      },
      {
        createdAt: "desc"
      }
    ]
  })
}

const Dashboard = async() => {

  const applications = await getApplicants()
  

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-2/3">
        <DataTable columns={columns} data={applications}/>
      </div>
    </div>
  )
}

export default Dashboard