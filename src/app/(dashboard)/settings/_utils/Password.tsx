"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import "react-phone-number-input/style.css";
import Button from "@/components/Button";
import { passwordFormSchema } from "@/lib/validation";
import { FormFieldType } from "./_profile/ProfileInfo";






export default function Password() {

  const form = useForm<z.infer<typeof passwordFormSchema>>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(values:z.infer<typeof passwordFormSchema>){
    // Send form data to server
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-[432px]">
        <CustomFormField
        control={form.control}
        type={FormFieldType.INPUT}
        name="currentPassword"
        label = "Current Password"
        placeholder=""
        inputType="password"

        />
        <CustomFormField
        inputType="password"
        control={form.control}
        type={FormFieldType.INPUT}
        name="password"
        label = "New Password"
        placeholder=""
        />
        <CustomFormField
        control={form.control}
        inputType="password"
        type={FormFieldType.INPUT}
        name="confirmPassword"
        label = "Confirm New Password"
        placeholder=""
        />
        <Button
         type="submit"
         >Submit</Button>
      </form>
    </Form>
  )
}
