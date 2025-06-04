import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function UploadHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-blue-200 via-blue-500 to-blue-800 animate-gradient-x group">
        <Badge
          variant={"secondary"}
          className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors"
        >
          <Sparkles
            className="text-blue-600 animate-pulse"
            style={{ width: "25px", height: "25px" }}
          />
          <p className="text-base text-blue-500">AI-Powered Content Creation</p>
        </Badge>
      </div>

      <div className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <h1 className="font-bold py-6 text-center text-2xl sm:text-6xl lg:text-7xl ">
          Start Uploading{" "}
          <span className="relative inline-block">
            {" "}
            <span className="relative z-10 px-2 "> Your PDF's </span>{" "}
            <span className="absolute inset-0 bg-blue-200 -rotate-2 rounded-lg transform -skew-y-1"></span>
          </span>
        </h1>

        {/* <h1 className="text-6xl font-bold">Start Uploading Your PDF's</h1> */}
        <p className="text-xl text-gray-600">
          upload your PDF and let our AI do the magic! 🌟
        </p>
      </div>
    </div>
  );
}
