﻿"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/button";

export function WavyBackgroundDemo() {
  return (
    <section className="sticky top-0 z-10 h-screen flex flex-col justify-center bg-blue-200 text-foreground">
      <WavyBackground className="sticky">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-6xl font-bold mb-6">
            Hi there,
            <br />I am <span>Jon Doe</span>
          </h1>
          <p className="text-2xl mb-8 max-w-2xl ">
            A passionate web developer creating amazing digital experiences.
          </p>
          <Button size="lg">Download CV</Button>
        </div>
        {/* <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p> */}
      </WavyBackground>
    </section>
  );
}