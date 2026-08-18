import { z } from "zod";

export const contactFormSchema = z.object({
  "first-name": z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(80, "First name must be 80 characters or fewer"),
  "last-name": z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(80, "Last name must be 80 characters or fewer"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(254, "Email must be 254 characters or fewer")
    .email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be 5000 characters or fewer"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
