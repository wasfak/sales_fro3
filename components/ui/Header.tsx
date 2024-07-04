import Link from "next/link";
import Nav from "../Nav";
import { Button } from "./button";
import MobileNav from "../MobileNav";
import { UserButton, auth } from "@clerk/nextjs";

export default function Header() {
  const { userId } = auth();
  return (
    <header className="text-black py-4 xl:py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Wasfy<span className="text-black">.</span>
          </h1>
        </Link>

        {/*DeskTop Nav */}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {userId ? (
            <Link href="/">
              <UserButton afterSignOutUrl="/" />
            </Link>
          ) : (
            <Button asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
          )}
        </div>

        {/*Mobile Nav */}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
