"use client";
import { z } from "zod";
import UploadFormInput from "./UploadFormInput";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import {
  generatedPdfSummary,
  storePdfSummaryAction,
} from "@/actions/UploadActions";
import { useRef, useState } from "react";

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
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      // console.log("uploaded successfully!");
      // toast.success("PDF uploaded successfully!");
      toast("📃 PDF uploaded successfully!", {
        description: "See the magic ✨",
      });
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

    try {
      setIsLoading(true);

      console.log("Submitted");
      const formData = new FormData(e.currentTarget);
      const file = formData.get("file") as File;

      // validating the fields
      const validatedFields = schema.safeParse({ file });

      console.log(validatedFields);

      if (!validatedFields.success) {
        console.log(
          validatedFields.error.flatten().fieldErrors.file?.[0] ??
            "Invalid file"
        );

        toast.error("Invalid file", {
          description:
            validatedFields.error.flatten().fieldErrors.file?.[0] ??
            "Invalid file",
        });
        setIsLoading(false);
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
        setIsLoading(false);
        return;
      }
      toast("📃 Processing PDF", {
        description: "Hang tight! Our AI is reading through your document. ✨",
      });
      // parse the pdf using lang chain
      const result = await generatedPdfSummary(resp);
      console.log({ result });

      const { data = null, message = null } = result || {};

      if (data) {
        let storeResult: any;
        toast("📃 Saving PDF...", {
          description: "Hang tight! We are saving your summary!",
        });
        // formRef.current?.reset();

        // save the summary to the database
        if (data.summary) {
          storeResult = await storePdfSummaryAction({
            summary: data.summary,
            fileUrl: resp[0].serverData.file.url,
            title: data.title,
            fileName: file.name,
          });

          toast("✨ Summary Generated!", {
            description:
              "Your PDF has been successfully summarized and saved! ✨",
          });

          formRef.current?.reset();
          // TODO: redirect to the [id] summary page
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error occur.....??", error);
      formRef.current?.reset();
    }
  };
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl">
      <UploadFormInput
        isLoading={isLoading}
        ref={formRef}
        onSubmit={handleSubmit}
      ></UploadFormInput>
    </div>
  );
}
