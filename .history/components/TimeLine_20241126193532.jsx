﻿import Image from "next/image";
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
          "https://media.licdn.com/dms/image/v2/C4D0BAQEmGYkHUN31VA/company-logo_100_100/company-logo_100_100/0/1675677516156/universitat_politecnica_de_catalunya_logo?e=1740614400&v=beta&t=zLQLjE2iOX-sX8D4NJG1RFKqvtuIyvt0RYsUYWGTcZE",
        degree: "MSc in Data Science",
        institution: "Universitat Politecnica de Catalunya",
        description:
          "Graduated with distinction. Led multiple hackathon teams.",
      },
      {
        year: "2020 - 2023",
        image:
          "https://media.licdn.com/dms/image/v2/C560BAQENxA8hGFerdA/company-logo_100_100/company-logo_100_100/0/1631332194374?e=1740614400&v=beta&t=NtoWA15bZc9OZr2cJ1STDdiAofk14RX9MuwoD9gMb4c",
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
          "https://media.licdn.com/dms/image/v2/C4D0BAQF8x8kpXJLBkg/company-logo_100_100/company-logo_100_100/0/1630549492517/valeo_logo?e=1740614400&v=beta&t=5KfHochWi-3rKEOENJNI3NvYjX9qO5s4ssIn9R9yZAY",
        jobTitle: "Full-Stack Developer",
        company: "Valeo",
        description:
          "Built and launched Aceternity UI and Aceternity UI Pro from scratch.",
      },
      {
        year: "2023",
        image:
          "https://media.licdn.com/dms/image/v2/C560BAQENxA8hGFerdA/company-logo_100_100/company-logo_100_100/0/1631332194374?e=1740614400&v=beta&t=NtoWA15bZc9OZr2cJ1STDdiAofk14RX9MuwoD9gMb4c",
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
