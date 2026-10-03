import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  company: z.string().optional(),
  budget: z.enum(["<25k", "25k-50k", "50k-100k", "100k+"], {
    message: "Please select a budget range",
  }),
  projectTypes: z.array(z.string()).min(1, "Please select at least one project type"),
  message: z.string().min(10, "Please provide a brief description (at least 10 characters)"),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
