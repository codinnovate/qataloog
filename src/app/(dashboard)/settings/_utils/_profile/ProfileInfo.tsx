"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import "react-phone-number-input/style.css";
import Button from "@/components/Button";
import { userFormSchema } from "@/lib/validation";



export  enum FormFieldType {
  INPUT = "input",
  PHONE_INPUT = "phoneInput",
}






export default function ProfileInfo() {

  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  async function onSubmit(values:z.infer<typeof userFormSchema>){
    // Send form data to server
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
        control={form.control}
        type={FormFieldType.INPUT}
        name="name"
        label = "Full Name"
        placeholder="John Doe"
        />
        <CustomFormField
        control={form.control}
        type={FormFieldType.INPUT}
        name="email"
        label = "Email"
        placeholder="Johnd@gmail.com"
        />
        <CustomFormField
        control={form.control}
        type={FormFieldType.PHONE_INPUT}
        name="phone"
        label = "Phone Number"
        placeholder=""
        />
        <Button
         type="submit"
         >Submit</Button>
      </form>
    </Form>
  )
}
