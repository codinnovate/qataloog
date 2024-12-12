"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import Button from "@/components/Button";
import { useState } from "react";
import { subscriptionFormSchema } from "@/lib/validation";
import { FormFieldType } from "@/app/(dashboard)/settings/_utils/_profile/ProfileInfo";






export default function SubForm() {
  const {isLoading, setIsLoading} = useState(false);

  const form = useForm<z.infer<typeof subscriptionFormSchema>>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
        planDuration_month: 4,
        planDuration_days: 120,
        subscriptionFee: 5000,
    },
  })

  async function onSubmit(values:z.infer<typeof subscriptionFormSchema>){
    setIsLoading(true)
    // Send form data to server
    console.log(values)
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
        control={form.control}
        type={FormFieldType.INPUT}
        name="planDuration_month"
        label = "Plan Duration (Months)"
        placeholder=""
        />
        <CustomFormField
        control={form.control}
        type={FormFieldType.INPUT}
        name="planDuration_days"
        label = "Plan Duration (Days)"
        placeholder=""
        />
        <CustomFormField
        control={form.control}
        type={FormFieldType.INPUT}
        name="subscriptionFee"
        label = "Subscription Fee (₦)"
        placeholder=""
        />
        <Button
         type="submit"
         isLoading={isLoading}
         >Update</Button>
      </form>
    </Form>
  )
}
