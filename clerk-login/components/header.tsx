import Link from "next/link";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUp,
  SignUpButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="bg-gray-600 text-neutral-100">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">Home</Link>
        <SignedIn>
          <Link href="/about">About</Link>
        </SignedIn>
        <div>
          <div className="flex gap-5">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
}
