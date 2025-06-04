"use client";
import UploadFormInput from "./UploadFormInput";

export default function UploadForm() {
  const handleSubmit = () => {
    console.log("Submitted");
  };
  return (
    <div>
      <UploadFormInput onsubmit={handleSubmit}></UploadFormInput>
    </div>
  );
}
