import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const education = {
    title: "Education",
    data: [
      {
        year: "2024 -",
        image:
          "https://media.licdn.com/dms/image/v2/C4D0BAQEi1fl1yzka5A/company-logo_100_100/company-logo_100_100/0/1630463004621/uzh_logo?e=1740614400&v=beta&t=WPWcBJqUSfbQMAo3oN0z7b8ST8D__roSGa5gC_fx6pU",
        degree: "MSc in Informatic",
        institution: "University of Zurich",
        description: "Specialized in AI and Frontend Development.",
      },
      {
        year: "Early 2024",
        image:
          "https://media.licdn.com/dms/image/v2/C4D0BAQEi1fl1yzka5A/company-logo_100_100/company-logo_100_100/0/1630463004621/uzh_logo?e=1740614400&v=beta&t=WPWcBJqUSfbQMAo3oN0z7b8ST8D__roSGa5gC_fx6pU",
        degree: "MSc in Data Science",
        institution: "Universitat Politecnica de Catalunya",
        description:
          "Graduated with distinction. Led multiple hackathon teams.",
      },
      {
        year: "2020 - 2023",
        image:
          "https://media.licdn.com/dms/image/v2/C4D0BAQEi1fl1yzka5A/company-logo_100_100/company-logo_100_100/0/1630463004621/uzh_logo?e=1740614400&v=beta&t=WPWcBJqUSfbQMAo3oN0z7b8ST8D__roSGa5gC_fx6pU",
        degree: "BSc in Computer Science Engineering",
        institution: "Budapest University of Technology and Economics",
        description:
          "Graduated with distinction. Led multiple hackathon teams.",
      },
    ],
  };

  const work = {
    title: "Work Experience",
    data: [
      {
        year: "2023 - 2024",
        image:
          "https://media.licdn.com/dms/image/v2/C4D0BAQEi1fl1yzka5A/company-logo_100_100/company-logo_100_100/0/1630463004621/uzh_logo?e=1740614400&v=beta&t=WPWcBJqUSfbQMAo3oN0z7b8ST8D__roSGa5gC_fx6pU",
        jobTitle: "Full-Stack Developer",
        company: "Valeo",
        description:
          "Built and launched Aceternity UI and Aceternity UI Pro from scratch.",
      },
      {
        year: "2023",
        image:
          "https://media.licdn.com/dms/image/v2/C4D0BAQEi1fl1yzka5A/company-logo_100_100/company-logo_100_100/0/1630463004621/uzh_logo?e=1740614400&v=beta&t=WPWcBJqUSfbQMAo3oN0z7b8ST8D__roSGa5gC_fx6pU",
        jobTitle: "Java Laboratory Assistant",
        company: "Budapest University of Technology and Economics",
        description:
          "Contributed to redesigning their e-commerce platform, increasing conversions by 15%.",
      },
    ],
  };
  return (
    <div className="w-full bg-background">
      <Timeline data={education} />
      <Timeline data={work} />
    </div>
  );
}
