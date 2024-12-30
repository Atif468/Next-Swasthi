 "use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  heading: string;
  description: string;
  image: string;
}

interface TimelineProps {
  data: TimelineEntry[];
}
export const Timeline = ({ data }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);  
  const containerRef = useRef<HTMLDivElement>(null);  
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 120%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="w-full text-center p-10">
        <p className="font-roboto text-[36px] md:text-[48px] font-black text-neutral-200">
          How It Works&nbsp;
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(92.57deg, #D84315 -28.74%, #FFC107 124.48%)",
            }}
          >
            - 3 Easy Steps
          </span>
        </p>
        <p className="font-roboto text-[14px] md:text-[18px] font-normal leading-[22px] text-neutral-300">
          Getting started with Swasthi is quick and easy! Follow these three
          simple steps to begin your journey towards a healthier lifestyle!
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start items-start pt-10 md:pt-40 gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* circles */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-orange-400 dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-black border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
            </div>
            <div className="ml-16 md:w-1/3">
              <h3 className="text-xl md:pl-20 md:text-5xl font-bold text-white">
                {item.title}
              </h3>
              <h4 className=" text-lg md:text-xl font-semibold text-neutral-400 dark:text-neutral-500">
                {item.heading}
              </h4>
              <p className="mt-2 text-sm md:text-base text-gray-500 dark:text-gray-300">
                {item.description}
              </p>
            </div>
            <div className="ml-16 md:w-2/3">
               <Image
                                unoptimized={true}
                                quality={100}
                                  width={50}
                                  height={300}
                src={item.image}
                alt={item.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}

        <div
          style={{ height: "100%" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};