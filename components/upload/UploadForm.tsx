"use client";
import { z } from "zod";
import UploadFormInput from "./UploadFormInput";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";

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
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("uploaded successfully!");
      toast.success("PDF uploaded successfully!");
    },
    onUploadError: (err) => {
      console.log("error occurred while uploading", err);
      toast.error("Error occurred while uploading PDF", {
        description: err.message,
      });
    },
    // onUploadBegin: ({ file }) => {
    //   console.log("upload has begun for", file);
    // },
    onUploadBegin: (file) => {
      console.log("upload has begun for", file);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      toast.error("Invalid file", {
        description:
          validatedFields.error.flatten().fieldErrors.file?.[0] ??
          "Invalid file",
      });
      return;
    }

    toast("📃 Uploading PDF...", {
      description: "We are uploading your PDF",
    });

    // schema with zod
    // upload the file to uploadThing
    const resp = await startUpload([file]);
    if (!resp) {
      toast.error("Something went wrong"),
        {
          description: "Please use a different file.",
        };
      return;
    }
    toast("📃 Processing PDF", {
      description: "Hang tight! Our AI is reading through your document. ✨",
    });
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
