"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const formSchema = z.object({
  university: z
    .string()
    .min(1, { message: "University cannot be empty"}),
  resume: z
    .instanceof(File)
    .optional()
    .refine(file => file !== undefined, "File is required")
    .refine(file => {if (file) {return file.size <= MAX_FILE_SIZE}}, "Max file size is 5MB")
    .refine(file => {if (file) {return ACCEPTED_FILE_TYPES.includes(file.type)}}, "Only .pdf, .jpeg and .png formats are supported")
})

export const ApplicationForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      university: "",
      resume: undefined
    },
  })

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    console.log(values)
    const formData = new FormData()
    formData.append("university", values.university)
    formData.append("resume", values.resume!)

    try {
      await fetch("/api/apply", {
        method: "POST",
        body: formData
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="university"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                Enter the university you attend.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume</FormLabel>
              <FormControl>
                <Input  type="file" onChange={e => {
                  field.onChange(e.target?.files ? e.target.files[0] : null);
                }}
                />
              </FormControl>
              <FormDescription>
                Upload your resume (.pdf, .jpeg, or .png)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}