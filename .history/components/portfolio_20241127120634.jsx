import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { AboutMe } from "@/components/AboutMe";
import { Certifications } from "@/components/Certifications";
import { ThemeSelector } from "@/components/ThemeSelector";
import { WavyBackgroundDemo } from "@/components/WavyDemo";
import { TimelineDemo } from "@/components/TimeLine";
import { ContactForm } from "@/components/Contact";
import { ChevronUp } from "lucide-react";

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
    "I'm Akos Imets, a dedicated software engineer and university student passionate about creating innovative solutions through technology. From full-stack development to designing data-driven applications, I strive to bridge the gap between user needs and efficient software solutions.",
  forRecruiters:
    "I am a motivated software engineer and university student with hands-on full-stack development experience using Python, Django, React, and Vue, I bring a versatile skill set to the table. My internship at Valeo honed my practical skills, while my academic background includes various project from data science and machine learning to data visualization and project management. I'm eager to apply my knowledge and skills to contribute to forward-thinking teams and tackle real-world challenges.",
  forEngineers:
    "Hey, I'm Akos, an computer science engineer graduate, passionate about building efficient, and scalable systems. I have experience in creating front-ends with React, Vue and Next.js and improving back-end with Django, I enjoy tackling challenges that improve performance and usability. I'm currently looking for opportunities to work on projects that will help me grow as a developer and engineer.",
};
export default function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <WavyBackgroundDemo />

      {/* Scroll Down Arrow */}
      <div className="absolute top-[90vh] left-1/2 transform -translate-x-1/2 animate-bounce z-50">
        <ChevronUp size={64} color="#ffffff" />
      </div>

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
                  className="bg-secondary text-accent-foreground px-4 py-2 rounded-full text-lg shadow-md"
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
              asChild // Allows wrapping the button content inside an <a> tag
            >
              <a
                href="https://github.com/imets01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex"
                style={{ width: "3rem", height: "3rem" }}
              >
                <Github
                  className="p-3"
                  style={{ width: "inherit", height: "inherit" }}
                />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild // Allows wrapping the button content inside an <a> tag
              className
            >
              <a
                href="https://www.linkedin.com/in/akosimets0301/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex"
                style={{ width: "3rem", height: "3rem" }}
              >
                <Linkedin
                  className="p-3"
                  style={{ width: "inherit", height: "inherit" }}
                />
              </a>
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
}
