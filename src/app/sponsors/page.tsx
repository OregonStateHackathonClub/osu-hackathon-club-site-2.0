"use client"

import { useState } from "react"
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

const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty"}),
  email: z.string().email().min(1, { message: "Email cannot be empty"}),
  company: z.string().min(1, { message: "Company cannot be empty"}),
})

const Sponsors = () => {

  const [hidden, setHidden] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: ""
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setHidden(true)
    console.log(values)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      { hidden ? (
        <span>Thank you, your response has been recorded and we will be in touch soon.</span>
      ) : (
        <>
          <span>Please respond with your company and contact information so we can reach out about sponsorships!</span>
          <div hidden={hidden}>
            <Form {...form} >
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField 
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                      <Input {...field} />
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
                      <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Your contact email
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                      <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        The company you are reaching out on behalf of
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant="outline">Submit</Button>
              </form>
            </Form>
          </div>
        </>
      )}
    </div>
  )
}

export default Sponsors