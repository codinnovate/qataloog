import { z } from "zod";

export const userFormSchema = z.object({
    name: z.string()
    .min(5, {
      message: "Fullname must be at least 5 characters.",
    }) ,
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid  phone number"),
  })
  
  
export const subscriptionFormSchema = z.object({
    planDuration_month: z.number()
    .min(1, {
      message: "Plan Duration Months Cannot Be less Than 1 digit",
    }),
    planDuration_days: z.number()
    .min(1, {
      message: "Plan Duration Days Cannot Be less Than 1 digit",
    }),
    subscriptionFee: z.number()
    .min(4, {
      message: "Subscription Fee Amount Cannot Be Less Than 4 digits",
    }),
  });
    
export const passwordFormSchema = z.object({
  currentPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
}).refine((data) => data.password !== data.currentPassword, {
  message: "New password must be different from current password",
  path: ['password'],
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ['confirmPassword'],
});


