import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React from "react";

export default function HeroCopy() {
  return (
    <>
      <div className="flex flex-col w-full text-center gap-7 ">
        <h1 className="relative text-5xl font-thin text-display ">
          Web design for culinary creators with unique{" "}
          <span className="italic font-thin">aesthetics</span>.
          {/* <Sparkle className={"absolute -top-10 right-12"} /> */}
        </h1>
        <h3 className="font-light text-white-125 text-small-body">
          Web agency focused on bringing your audience closer to your brand.
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-16 mt-10">
        <div className="flex items-center justify-center gap-2 p-1 px-2 font-bold text-center text-black bg-white rounded-lg text-md">
          Start here <ArrowTopRightIcon className="w-5 h-5 stroke-cyan-950 " />
        </div>
      </div>
    </>
  );
}
