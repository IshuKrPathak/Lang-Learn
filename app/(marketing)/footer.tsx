import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import flag1 from "../../public/china.png";
import flag2 from "../../public/philippines.png";
import flag3 from "../../public/ireland.png";
import flag4 from "../../public/germany.png";
import flag5 from "../../public/flag.png";
import flag6 from "../../public/ecuador.png";
import flag7 from "../../public/united-kingdom.png";

export const Footer = () => {
  return (
    <footer className=" hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className=" max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button className="w-full" variant="ghost" size="lg">
          <Image
            src={flag1}
            alt="flags"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          China
        </Button>

        <Button className="w-full" variant="ghost" size="lg">
          <Image
            src={flag2}
            alt="flags"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Phillipines
        </Button>

        <Button className="w-full" variant="ghost" size="lg">
          <Image
            src={flag3}
            alt="flags"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Ireland
        </Button>

        <Button className="w-full" variant="ghost" size="lg">
          <Image
            src={flag4}
            alt="flags"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Germany
        </Button>

        <Button className="w-full" variant="ghost" size="lg">
          <Image
            src={flag5}
            alt="flags"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          India
        </Button>

        <Button className="w-full" variant="ghost" size="lg">
          <Image
            src={flag6}
            alt="flags"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Ecuador
        </Button>

        <Button className="w-full" variant="ghost" size="lg">
          <Image
            src={flag7}
            alt="flags"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          United Kingdom
        </Button>
      </div>
    </footer>
  );
};
