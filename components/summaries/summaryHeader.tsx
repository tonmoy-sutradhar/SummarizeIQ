import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";

export default function SummaryHeader({ title }: { title: string }) {
  return (
    <div className="flex gap-4 mb-4 justify-between items-center">
      <div className="text-4xl font-bold ">{title}</div>
      <div>
        {/* <Link href={"/dashboard"}>
          <Button
            size={"sm"}
            className="group flex items-center gap-1 sm:gap-2 hover"
          >
            Back to Dashboard
          </Button>
        </Link> */}
        <Button
          variant={"link"}
          className=" group rounded-2xl hover:no-underline flex items-center gap-1 sm:gap-3 border-blue-100/30 bg-blue-100 px-2 sm:px-3"
        >
          <Link
            href={"/dashboard"}
            className="text-blue-500  flex items-center "
          >
            <ChevronLeft className="h-3 w-3  text-blue-500 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5"></ChevronLeft>
            {"    "} Back <span className="hidden sm:inline">to Dashboard</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
