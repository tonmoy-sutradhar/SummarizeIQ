import { Button } from "../ui/button";

export default function UploadFormInput() {
  return (
    <div>
      <form action="" className="flex flex-col gap-6">
        <input type="file" />
        <Button>Upload your PDF</Button>
      </form>
    </div>
  );
}
