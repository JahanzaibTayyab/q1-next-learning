"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import jahanzaibImage from "@/assets/images/Jahanzaib.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-2 px-5">
      <div className="mx-4 order-last self-center ">
        <Image
          src={jahanzaibImage}
          alt="image"
          width={96}
          height={96}
          className="rounded-full w-24 h-24 object-fill"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1>Jahanzaib Tayyab</h1>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Full stack Developer
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
        <div>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
