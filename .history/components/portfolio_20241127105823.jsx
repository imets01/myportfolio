import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Intro } from "@/components/Intro";
import { AboutMe } from "@/components/AboutMe";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { ThemeSelector } from "@/components/ThemeSelector";
import { AnimationDemo } from "@/components/AnimationDemo";
import { WavyBackgroundDemo } from "@/components/WavyDemo";
import { TailwindcssButtons } from "@/components/Buttons";
import { LitUpButton } from "@/components/LitUpButton";
import { TimelineDemo } from "@/components/TimeLine";
import { ContactForm } from "@/components/Contact";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2018 - 2022",
    duration: "4 years",
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Code Academy",
    year: "2023",
    duration: "3 months",
  },
];

const experienceData = [
  {
    title: "Junior Web Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    responsibilities: [
      "Developed responsive web applications using React and Node.js",
      "Collaborated with design team to implement user-friendly interfaces",
    ],
  },
  {
    title: "Web Development Intern",
    company: "StartUp Co.",
    period: "Summer 2021",
    responsibilities: [
      "Assisted in the development of company website",
      "Gained experience with version control using Git",
    ],
  },
];

const certificationData = [
  {
    name: "IELTS Academic English Test",
    issuer: "Overall Band Score: 8.0",
    year: "2024",
  },
  {
    name: "LanguageCert Expert C1 English Test",
    issuer: "Level 2 in ESOL International",
    year: "2020",
  },
];

const aboutMeData = {
  forEveryone:
    "I'm Jon Doe, a passionate web developer with a knack for creating user-friendly and efficient web applications. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software design.",
  forRecruiters:
    "As a junior web developer with 2 years of experience, I specialize in front-end development using React and have a strong foundation in back-end technologies like Node.js. I'm always eager to take on new challenges and contribute to innovative projects that push the boundaries of web technology.",
  forEngineers:
    "Hey fellow devs! I'm all about clean code, test-driven development, and staying up-to-date with the latest web technologies. I'm particularly interested in performance optimization and scalable architecture. Always up for a good debate about tabs vs spaces or the best way to handle state management in React!",
};

export default function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <WavyBackgroundDemo />

      <ThemeSelector />
      <main className="relative z-20 bg-background rounded-t-[42px]">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <AboutMe
            forEveryone={aboutMeData.forEveryone}
            forRecruiters={aboutMeData.forRecruiters}
            forEngineers={aboutMeData.forEngineers}
          />
          <TimelineDemo />

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mt-20 mb-4 text-primary max-w-4xl">
              Skills
            </h2>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Django",
                "Java",
                "JavaScript",
                "React",
                "Next.js",
                "Angular",
                "C#, .NET",
                "HTML",
                "CSS, tailwindcss",
                "SQL",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-lg shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <Certifications items={certificationData} />

          <ContactForm />

          {/* Social Media */}
          <section className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon2"
              className="w-20 h-20 flex items-center justify-center"
              asChild // Allows wrapping the button content inside an <a> tag
            >
              <a
                href="https://github.com/imets01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex"
                style={{ width: "5rem", height: "5rem" }}
              >
                <Github className="w-fit" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon2"
              asChild // Allows wrapping the button content inside an <a> tag
            >
              <a
                href="https://www.linkedin.com/in/akosimets0301/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
}
