import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./Nav-link";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <nav className="container flex items-center justify-between py-4 px-2 lg:px-8 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink
          className="flex items-center gap-1 lg:gap-2 shrink-0"
          href={"/"}
        >
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out cursor-pointer"></FileText>
          <span className="font-extrabold lg:text-xl text-gray-900">
            SummarizeIQ
          </span>
        </NavLink>
      </div>

      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href={"/#pricing"}>Pricing</NavLink>

        <SignedIn>
          <NavLink href={"/dashboard"}>Your Summaries</NavLink>
        </SignedIn>
      </div>

      <div className="flex lg:justify-end gap-4 lg:flex-1 lg:items-cente">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href={"/upload"}>Upload a PDF</NavLink>
            <div>Pro</div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>

        <SignedOut>
          <NavLink href={"/sign-in"}>SignIn</NavLink>
        </SignedOut>
      </div>
    </nav>
  );
}
