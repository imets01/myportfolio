import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const education = {
    title: "Education",
    data: [
      {
        year: "Sept 2024 -",
        image:
          "https://media.licdn.com/dms/image/v2/C4D0BAQEi1fl1yzka5A/company-logo_100_100/company-logo_100_100/0/1630463004621/uzh_logo?e=1740614400&v=beta&t=WPWcBJqUSfbQMAo3oN0z7b8ST8D__roSGa5gC_fx6pU",
        degree: "MSc in Informatic",
        institution: "University of Zurich",
        description: [
          "<strong>Software Systems major</strong>",
          "<strong>Informatics minor</strong>",
          "<strong>Relevant coursework:</strong> Data Science, Information Management, Software Systems, Visual Data Analysis, Network Science",
        ],
      },
      {
        year: "Feb 2024 - Jul 2024",
        image:
          "https://media.licdn.com/dms/image/v2/C4D0BAQEmGYkHUN31VA/company-logo_100_100/company-logo_100_100/0/1675677516156/universitat_politecnica_de_catalunya_logo?e=1740614400&v=beta&t=zLQLjE2iOX-sX8D4NJG1RFKqvtuIyvt0RYsUYWGTcZE",
        degree: "MSc in Data Science",
        institution: "Universitat Politecnica de Catalunya",
        description: [
          "<strong>Erasmus semester</strong>",
          "<strong>Relevant coursework:</strong> Machine Learning, Data Visualization",
        ],
      },
      {
        year: "2020 - 2023",
        image:
          "https://media.licdn.com/dms/image/v2/C560BAQENxA8hGFerdA/company-logo_100_100/company-logo_100_100/0/1631332194374?e=1740614400&v=beta&t=NtoWA15bZc9OZr2cJ1STDdiAofk14RX9MuwoD9gMb4c",
        degree: "BSc in Computer Science Engineering",
        institution: "Budapest University of Technology and Economics",
        description: [
          "<strong>Specialization:</strong> Software Development",
          "<strong>Grade:</strong> 4.48/5",
          "<strong>Relevant coursework:</strong> Artificial Intelligence, Mobile- and Web-based Systems, Cloud Based Software Development, Software Engineering, Client Side Technologies, Database Systems,",
        ],
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
        description: [
          "Developement of an inventory management system using the Django high-level Python web framework",
          "Front-end adjustments improving overall user experience and system usability",
          "Implemented a tree-based data manipulation feature using React",
          "Worked in sprints and used Agile methodologies",
        ],
      },
      {
        year: "2023",
        image:
          "https://media.licdn.com/dms/image/v2/C560BAQENxA8hGFerdA/company-logo_100_100/company-logo_100_100/0/1631332194374?e=1740614400&v=beta&t=NtoWA15bZc9OZr2cJ1STDdiAofk14RX9MuwoD9gMb4c",
        jobTitle: "Java Laboratory Demonstrator",
        company: "Budapest University of Technology and Economics",
        description: [
          "Provided guidance and support to a group of students during their weekly laboratory sessions for the Programming 3 (Java) course. ",
          "Evaluated and provided feedback on homework assignments. ",
        ],
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
