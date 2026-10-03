"use server";

import { inquirySchema, InquiryFormData } from "@/lib/schemas";

export interface InquiryActionResult {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
}

export async function submitInquiry(
  _prevState: unknown,
  formData: FormData
): Promise<InquiryActionResult> {
  const rawProjectTypes = formData.getAll("projectTypes") as string[];

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || undefined,
    budget: formData.get("budget"),
    projectTypes: rawProjectTypes.length > 0 ? rawProjectTypes : [],
    message: formData.get("message"),
  };

  const parsed = inquirySchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Please correct the highlighted errors.",
    };
  }

  const validData: InquiryFormData = parsed.data;

  // Simulate network delay / stubbed email dispatch
  await new Promise((resolve) => setTimeout(resolve, 600));

  // TODO: Integrate Resend API (e.g. resend.emails.send({...}))
  console.log("[INQUIRY RECEIVED]", {
    timestamp: new Date().toISOString(),
    ...validData,
  });

  return {
    success: true,
    message: "Inquiry received. Our engineering leads will review and respond within 24 hours.",
  };
}
