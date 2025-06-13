import BgGradient from "@/components/common/BgGradient";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <BgGradient className="from-emerald-200 via-teal-200 to-cyan-200"></BgGradient>
      <div className="container mx-auto flex flex-col gap-4 ">
        <div className="px-2 py-12 sm:py-24">
          <h1 className="text-6xl font-bold">Your Summaries</h1>
          <p>Transform your PDFs into concise, action insights</p>

          <Button
            variant={"link"}
            className="bg-linear-to-r from-blue-800 to-blue-500  hover:from-blue-500 hover:to-blue-800 hover:scale-105 transition-all duration-300 group hover:no-underline text-white border-2"
          >
            <Link href={"/upload"} className="flex items-center text-white">
              <Plus className="w-5 h-5 mr-2"></Plus> New Summary
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
