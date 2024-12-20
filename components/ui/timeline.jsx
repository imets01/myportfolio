﻿"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-background font-sans" ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-primary max-w-4xl">
          {data.title}
        </h2>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.data.map((item, index) => (
          <div key={index} className="flex justify-start pt-32 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-8/12">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-muted-foreground border-accent-foregroun p-2" />
              </div>
              <h3 className="hidden md:block text-2xl md:text-3xl md:pl-20  font-bold text-muted-foreground">
                {item.year}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl md:text-3xl mb-4 text-left font-bold text-muted-foreground">
                {item.year}
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={`${item.institution || item.company} logo`}
                  className="h-12 w-12 object-contain rounded-lg shadow-md"
                />
                <div>
                  <h4 className="text-2xl md:text-3xl font-semibold text-primary">
                    {item.degree || item.jobTitle}
                  </h4>
                  <h5 className="text-xl md:text-2xl font-medium text-accent-foreground">
                    {item.institution || item.company}
                  </h5>
                </div>
              </div>
              <ul className="text-primary text-md md:text-lg font-normal mt-2 list-disc pl-20">
                {Array.isArray(item.description) ? (
                  item.description.map((desc, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                  ))
                ) : (
                  <li>{item.description}</li> // Fallback if `description` is a string or invalid
                )}
              </ul>
            </div>
          </div>
        ))}
        {/* {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-30 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-muted-foreground border-accent-foregroun p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-muted-foreground">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))} */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
