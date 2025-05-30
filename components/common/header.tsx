import Link from "next/link";

export default function Header() {
  return (
    <nav className="container flex items-center justify-between px-5">
      <div>
        <Link href={"/"}>SummarizeIQ</Link>
      </div>
      <div>
        <Link href={"/#"}>Pricing</Link>
      </div>
      <div>
        <Link href={"/#"}>SignIn</Link>
      </div>
    </nav>
  );
}
