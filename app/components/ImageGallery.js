"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";

import Image1 from "@/public/Gallery Images/image1.jpg";
import Image2 from "@/public/Gallery Images/image2.jpg";
import Image3 from "@/public/Gallery Images/image3.jpg";
import Image4 from "@/public/Gallery Images/image4.jpg";
import Image5 from "@/public/Gallery Images/image5.jpg";
import Image6 from "@/public/Gallery Images/image6.jpg";

import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import Flip from "gsap/Flip";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ImageGallery() {
  const GalleryRef = useRef(null);
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip);
    ScrollTrigger.normalizeScroll(true);

    const ctx = gsap.context(() => {
      if (tl.current) {
        tl.current.kill();
        gsap.set(GalleryRef.current, { clearProps: "all" });
      }

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: GalleryRef.current,
          endTrigger: GalleryRef.current,
          start: "start start",
          end: "bottom bottom",
          //   scrub: false,
          scrub: true,
          //false = timed
          //scrub = with user scroll
        },
      });
      tl.current.add(
        tl.current.from(".center-text", {
          opacity: 0.2,
          scale: 0.8,
          y: 80,
          stagger: {
            amount: 0.1,
            from: "start",
          },
        })
      );
    }, GalleryRef);
    OriginGallery.forEach((item, index) => {
      const state = Flip.getState(`.${item.flipId}-origin`);

      tl.current.add(
        Flip.from(state, {
          targets: `.${item.flipId}-target`,
          scale: false,
          stagger: {
            amount: 0,
            // amount: 0.1,
            from: "start",
          },
          duration: 0.3,
          //each elements time to get to the target
        }),
        "-=80%"
      );
    });
    return () => ctx.revert(); // <-- CLEANUP!
  }, []);

  return (
    <section ref={GalleryRef} className="w-full h-[300vh] relative">
      <div className="sticky top-0 flex flex-col items-center justify-center w-full h-screen">
        <div className="origin-wrapper absolute w-[48%] border-green-500">
          <div className="relative pt-[84%] w-full  border-blue-400">
            {OriginGallery.map((item) => {
              return (
                <div
                  //   ref={item.flipId == "Image1" ? originEl : null}
                  key={item.flipId}
                  data-flip-id={item.flipId}
                  className={twMerge(
                    "origin-div absolute aspect-auto w-[34%] h-1/2 border-white",
                    item.props,
                    `${item.flipId}-origin`
                  )}
                />
              );
            })}
          </div>
        </div>
        <div
          id="origin wrapper"
          className="w-full h-full border-red-500 origin-wrapper"
        >
          {Gallery.map((item) => {
            return (
              <div
                // ref={item.flipId == "Image1" ? targetEl : null}
                key={item.flipId}
                data-flip-id={item.flipId}
                className={twMerge(
                  "origin-div absolute aspect-auto ",
                  item.props,
                  `${item.flipId}-target`
                )}
              >
                <Image
                  src={item.image}
                  alt="Gallery Image"
                  className="object-fit"
                />
              </div>
            );
          })}
        </div>
        <div className="absolute ">
          <h3 className="text-5xl font-thin center-text ">
            Creating aesthetic animations
          </h3>
          <p className="text-lg text-center text-white/50 center-text">
            Collaborate with us today
          </p>
        </div>
      </div>
    </section>
  );
}
const Gallery = [
  {
    image: Image1,
    props: "w-[13%] h-[34%] top-[10%] left-[10%]",
    flipId: "Image1",
  },
  {
    image: Image2,
    props: "top-[3%] left-[32%] w-[13%] h-[34%]",
    flipId: "Image2",
  },
  {
    image: Image3,
    props: "bottom-[10%] left-[5%] w-[13%] h-[34%]",
    flipId: "Image3",
  },
  {
    image: Image4,
    props: "bottom-[5%] right-[20%] w-[13%] h-[34%]",
    flipId: "Image4",
  },
  {
    image: Image5,
    props: "w-[13%] h-[34%] bottom-[4%] left-[40%]",
    flipId: "Image5",
  },

  {
    image: Image6,
    props: "w-[13%] h-[34%] top-[10%] right-[3%]",
    flipId: "Image6",
  },
];
const OriginGallery = [
  { flipId: "Image1", props: "top-[0%] left-[0%]" },
  { flipId: "Image2", props: "top-[10%] left-[10%]" },
  { flipId: "Image3", props: "bottom-[10%] left-[20%]" },
  { flipId: "Image4", props: "bottom-[5%] right-[20%]" },
  { flipId: "Image5", props: "bottom-[20%] left-[40%]" },
  { flipId: "Image6", props: "top-[10%] right-[3%]" },
];
