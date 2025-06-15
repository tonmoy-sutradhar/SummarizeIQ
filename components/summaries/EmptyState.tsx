import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function EmptySummaryState() {
  return (
    <div className="text-center py-12">
      <div className="flex flex-col items-center gap-4">
        <FileText className="w-16 h-16 text-gray-400"></FileText>
        <h2 className="text-xl font-semibold text-gray-600">
          No summaries yet
        </h2>
        <p className="text-gray-500 max-w-md">
          Upload your first PDF to get started with AI-Powered summaries.
        </p>
        <Button
          variant={"link"}
          className="bg-linear-to-r from-blue-800 to-blue-500  hover:from-blue-500 hover:to-blue-800 hover:scale-105 transition-all duration-300 group hover:no-underline text-white border-2"
        >
          <Link href={"/upload"} className="flex items-center text-white">
            Create Your First Summary
          </Link>
        </Button>
      </div>
    </div>
  );
}
