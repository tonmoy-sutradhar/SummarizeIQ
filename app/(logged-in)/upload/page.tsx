import BgGradient from "@/components/common/BgGradient";
import UploadForm from "@/components/upload/UploadForm";

import UploadHeader from "@/components/upload/UploadHeader";

export default function page() {
  return (
    <section className="min-h-screen ">
      <BgGradient></BgGradient>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center ">
          <UploadHeader></UploadHeader>
          <UploadForm></UploadForm>
        </div>
      </div>
    </section>
  );
}
