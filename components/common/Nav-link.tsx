import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors text-sm duration-200 text-gray-600 hover:text-blue-500",
        className
      )}
    >
      {children}
    </Link>
  );
}
