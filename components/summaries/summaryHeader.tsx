import Link from "next/link";
import { Button } from "../ui/button";
import { Calendar, ChevronLeft, Clock, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";

export default function SummaryHeader({
  title,
  createdAt,
  readingTime,
}: {
  title: string;
  createdAt: string;
  readingTime: number;
}) {
  return (
    <div className="flex gap-4 mb-4 justify-between items-center">
      <div className="space-y-6 ">
        <div className="flex flex-wrap items-center gap-4">
          <Badge
            variant={"secondary"}
            className="relative px-4 text-sm font-medium bg-blue-100 text-blue-500 backdrop-blur-xs rounded-full hover:bg-white/90 transition-all duration-200 shadow-xs hover:shadow-md"
          >
            {/* <Sparkles className="h-4 w-4 mr-1.5"></Sparkles>*/}
            <Sparkles
              className="text-blue-600 animate-pulse"
              style={{ width: "20px", height: "20px" }}
            />
            AI Summary
          </Badge>
          <div className="flex  items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="text-blue-400"></Calendar>
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          {/* Reading Time */}
          <div className="flex  items-center gap-2 text-sm text-muted-foreground">
            <Clock className="text-blue-400"></Clock>
            {readingTime} min Read
          </div>
        </div>
        <h1 className="text-2xl lg:text-4xl font-bold lg:tracking-tight">
          <span className="bg-linear-to-r from-blue-600 to-lime-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
      </div>
      <div className="self-start">
        <Button
          variant={"link"}
          className=" group rounded-2xl hover:no-underline flex items-center gap-1 sm:gap-3 border-blue-100/30 bg-blue-100 px-2 sm:px-3"
        >
          <Link
            href={"/dashboard"}
            className="text-blue-500  flex items-center "
          >
            <ChevronLeft
              className=" text-blue-500 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5"
              style={{ width: "20px", height: "20px" }}
            ></ChevronLeft>
            {"    "} Back <span className="hidden sm:inline">to Dashboard</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
