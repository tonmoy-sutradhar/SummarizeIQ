"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface UploadFormInputProps {
  onsubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadFormInput({ onsubmit }: UploadFormInputProps) {
  return (
    <div>
      <form action="" className="flex flex-col gap-6 onSubmit= {onSubmit}">
        <div className="flex justify-end items-center gap-1.5">
          <Input
            id="file"
            name="file"
            accept="application/pdf"
            type="file"
            required
            className=""
          />
          <Button>Upload your PDF</Button>
        </div>
      </form>
    </div>
  );
}
