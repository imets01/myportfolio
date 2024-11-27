import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const education = {
    title: "Education",
    data: [
      {
        year: "2024",
        degree: "Master of Science in Computer Science",
        institution: "Aceternity University",
        description: "Specialized in AI and Frontend Development.",
      },
      {
        year: "2022",
        degree: "Bachelor of Technology in Information Technology",
        institution: "TechnoHub Institute of Technology",
        description:
          "Graduated with distinction. Led multiple hackathon teams.",
      },
    ],
  };

  const work = {
    title: "Work Experience",
    data: [
      {
        year: "2024",
        jobTitle: "UI Engineer",
        company: "Aceternity Labs",
        description:
          "Built and launched Aceternity UI and Aceternity UI Pro from scratch.",
      },
      {
        year: "2023",
        jobTitle: "Frontend Developer Intern",
        company: "Innovative Coders",
        description:
          "Contributed to redesigning their e-commerce platform, increasing conversions by 15%.",
      },
    ],
  };
  return (
    <div className="w-full bg-background">
      <Timeline data={education} />
      <Timeline data={Work} />
    </div>
  );
}
