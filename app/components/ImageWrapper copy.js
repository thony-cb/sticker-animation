"use client";
import React, { useLayoutEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function ImageWrapper({ className, children, custom }) {
  const imageRef = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0,
    });

    // Ensure the loading animation completes before creating the timeline animation
    gsap.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      delay: custom * 0.3,
      ease: "power2",
      onComplete: animation, // This will start the timeline animation when the loading animation is done
    });
  }, []);

  const animation = () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    tl.set(imageRef.current, {
      transformOrigin: `${gsap.utils.random(0, 1) > 0.5 ? 0 : 100}% 100%`,
    });
    tl.to(imageRef.current, { scale: 0.1, ease: "none" });
  };

  return (
    <div
      ref={imageRef}
      className={twMerge("block absolute opacity-0 scale-0", className)}
    >
      {children}
    </div>
  );
}
