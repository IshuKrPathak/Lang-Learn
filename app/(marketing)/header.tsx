import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  UserButton,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";

import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className=" h-20 w-full  borde-b-2 border-slate-200 px-4">
      <div className=" lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src={logo} alt="logo" className=" h-46 w-40" />
          {/* <h1 className="  text-2xl font-extrabold text-orange-500 tracking-wide">
            Lang-Learn

          </h1> */}
        </div>
        <ClerkLoading>
          <Loader className=" h-5 w-5 text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button>Login</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
