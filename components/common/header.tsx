import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  const isLoggedIn = false;
  return (
    <nav className="container flex items-center justify-between py-4 px-2 lg:px-8 mx-auto">
      <div className="flex lg:flex-1">
        <Link className="flex items-center gap-1 lg:gap-2 shrink-0" href={"/"}>
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out cursor-pointer"></FileText>
          <span className="font-extrabold lg:text-xl text-gray-900">
            SummarizeIQ
          </span>
        </Link>
      </div>

      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <Link href={"/#pricing"}>Pricing</Link>
        {isLoggedIn && <Link href={"/#dashboard"}>Your Summaries</Link>}
      </div>

      <div className="flex lg:justify-end gap-4 lg:flex-1 lg:items-cente">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <Link href={"/#upload"}>Upload a PDF</Link>
            <div>Pro</div>
            <Button>User</Button>
          </div>
        ) : (
          <div>
            <Link href={"/#sign-in"}>SignIn</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
