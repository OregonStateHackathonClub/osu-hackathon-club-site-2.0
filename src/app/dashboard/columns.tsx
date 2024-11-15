"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { File } from "lucide-react"

export type Application = {
  createdAt: Date
  university: string
  graduationYear: number
  resumePath: string
  user: {
    name: string, email: string
  }
}

const handleDownload = async(path: string) => {
  const res = await fetch(`/api/download/${path}`, { method: "GET" })
  const blob = await res.blob()
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a')
  link.href = url
  link.download = path
  link.click()
  window.URL.revokeObjectURL(url);
}

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "user.name",
    header: "Name",
  },
  {
    accessorKey: "user.email",
    header: "Email",
  },
  {
    accessorKey: "university",
    header: "University",
  },
  {
    accessorKey: "graduationYear",
    header: "Graduation",
  },
  {
    accessorKey: "resumePath",
    header: "Resume",
    cell: ({ cell }) => {
      return <Button variant="ghost" size="icon" onClick={() => handleDownload(cell.getValue() as string)}><File /></Button>
    }
  },
]
