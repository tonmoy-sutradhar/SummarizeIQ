"use client";
import { z } from "zod";
import UploadFormInput from "./UploadFormInput";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file." })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB."
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF."
    ),
});

export default function UploadForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    // validating the fields
    const validatedFields = schema.safeParse({ file });

    console.log(validatedFields);

    if (!validatedFields.success) {
      console.log(
        validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file"
      );
      return;
    }
    // schema with zod
    // upload the file to uploadThing
    // parse the pdf using lang chain
    // summarize the pdf using AI
    // Save the summary to the database
    // redirect to the [id] summary page
  };
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl">
      <UploadFormInput onsubmit={handleSubmit}></UploadFormInput>
    </div>
  );
}
