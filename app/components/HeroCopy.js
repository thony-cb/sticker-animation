import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React from "react";

export default function HeroCopy() {
  return (
    <>
      <div className="flex flex-col w-full text-center gap-7 ">
        <h1 className="relative text-5xl font-thin text-display ">
          Move your cursor or Scroll to view the{" "}
          <span className="italic font-thin">animation</span>.
        </h1>
        <h3 className="font-light text-white-125 text-small-body">
          Developer building unique animation using GSAP + React.
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-16 mt-10">
        <div className="flex items-center justify-center gap-2 p-1 px-2 font-medium text-center text-black bg-white rounded-lg text-md">
          Start here <ArrowTopRightIcon className="w-5 h-5 stroke-cyan-950 " />
        </div>
      </div>
    </>
  );
}
