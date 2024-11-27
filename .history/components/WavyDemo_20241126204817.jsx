﻿"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/button";

export function WavyBackgroundDemo() {
  return (
    <section className="sticky top-0 z-10 h-screen flex flex-col text-white">
      <WavyBackground className="sticky">
        <div className="container mx-auto px-4 max-w-4xl ml-2 overflow-x-hidden">
          <h1 className="text-6xl font-bold mb-6">
            Hello👋,
            <br />I am <span>Akos Imets</span>
          </h1>
          <p className="text-2xl mb-8 max-w-2xl ">
            A Master's student in Informatics at UZH, with a strong software
            development background.
          </p>
          <button className="px-8 py-2 rounded-lg bg-primary text-primary-foreground font-bold transition duration-200 hover:bg-primary-foreground hover:text-primary border-2 border-transparent hover:border-primary">
            Download CV
          </button>
        </div>
      </WavyBackground>
    </section>
  );
}