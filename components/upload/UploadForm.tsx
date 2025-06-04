"use client";
import UploadFormInput from "./UploadFormInput";

export default function UploadForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    // validating the fields
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
