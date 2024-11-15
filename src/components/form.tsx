"use client"

import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  university: z
    .string()
    .min(1, { message: "University cannot be empty" }),
  graduationYear: z
    .string()
    .min(1, { message: "Graduation year cannot be empty" }),
  resume: z
    .instanceof(File)
    .optional()
    .refine(file => file !== undefined, "File is required")
    .refine(file => {if (file) {return file.size <= MAX_FILE_SIZE}}, "Max file size is 5MB")
    .refine(file => {if (file) {return ACCEPTED_FILE_TYPES.includes(file.type)}}, "Only .pdf, .jpeg and .png formats are supported"),
  questionProject: z
    .string()
    .min(1, { message: "Question cannot be empty"})
    .refine(text => {
      const count = text.trim().split(/\s+/).length
      return count <= 250;
    }, "Response must be 250 words or less"),
  questionFact: z
    .string()
    .min(1, { message: "Question cannot be empty"})
    .refine(text => {
      const count = text.trim().split(/\s+/).length
      return count <= 50;
    }, "Response must be 50 words or less"),
})

export const ApplicationForm = ({ 
  name, 
  email,
  defaultValues = {}, 
  isDisabled = false 
}: { 
  name: string, 
  email: string, 
  defaultValues?: Partial<z.infer<typeof formSchema>>, 
  isDisabled?: boolean 
}) => {
  const router = useRouter()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      email,
      university: "",
      graduationYear: "",
      resume: undefined,
      questionProject: "",
      questionFact: "",
      ...defaultValues
    },
  })

  const onSubmit = async(values: z.infer<typeof formSchema>) => {

    const formData = new FormData()
    formData.append("university", values.university)
    formData.append("graduationYear", values.graduationYear)
    formData.append("resume", values.resume!)
    formData.append("questionProject", values.questionProject)
    formData.append("questionFact", values.questionFact)

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData
      })
      if (response.ok) {
        router.push("/profile")
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField 
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={true}
                />
              </FormControl>
              <FormDescription>
                Your name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input disabled={true} {...field}/>
              </FormControl>
              <FormDescription>
                Your email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="university"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University</FormLabel>
              <FormControl>
                <Input disabled={isDisabled} {...field} />
              </FormControl>
              <FormDescription>
                Enter the university you attend
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="graduationYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Graduation Year</FormLabel>
              <FormControl>
                <Input disabled={isDisabled} {...field} />
              </FormControl>
              <FormDescription>
                Enter your graduation year
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
                <Input  
                  type="file" 
                  disabled={isDisabled}
                  onChange={e => {
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
        <FormField 
          control={form.control}
          name="questionProject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us about a project you have worked on in the past.</FormLabel>
              <FormControl>
                <Textarea className="h-48" disabled={isDisabled} {...field} />
              </FormControl>
              <FormDescription>
                Max of 250 words
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="questionFact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What&apos;s an interesting fact about you?</FormLabel>
              <FormControl>
                <Textarea className="h-24" disabled={isDisabled} {...field} />
              </FormControl>
              <FormDescription>
                Max of 50 words
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline" className="w-full">Submit</Button>
      </form>
    </Form>
  )
}