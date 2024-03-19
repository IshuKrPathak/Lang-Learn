import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { SidebarItem } from "./sidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
};
export const Sidebar = ({ className }: Props) => {
    return (
        <div
            className={cn(
                " flex  h-full lg:w-[256px] lg:fixed left-0 top-0 border-r-2 flex-col",
                className
            )}
        >
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src={logo} alt="logo" className=" h-46 w-40" />
                    {/* <h1 className="  text-2xl font-extrabold text-orange-500 tracking-wide">
            Lang-Learn

          </h1> */}
                </div>
            </Link>
            <div className="  flex flex-col  gap-y-2 flex-1">
                <SidebarItem iconSrc="/home.png" label="learn" href="/learn" />
                <SidebarItem
                    iconSrc="/leaderboard.png"
                    label="learn"
                    href="/leaderboard"
                />
                <SidebarItem iconSrc="/aim.png" label="Aim" href="/aim" />
                <SidebarItem iconSrc="/shop.png" label="Shop" href="/shop" />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className=" h-5 w-5 text-blue-400 animate-spin" />

                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>

            </div>
        </div>
    );
};
