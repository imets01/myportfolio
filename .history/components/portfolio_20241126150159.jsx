import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
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
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    year: "2022",
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
      {/* <Intro
        name="Jon Doe"
        tagline="A passionate web developer creating amazing digital experiences."
      /> */}
      <ThemeSelector />
      <main className="relative z-20 bg-background rounded-t-[42px]">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <AboutMe
            forEveryone={aboutMeData.forEveryone}
            forRecruiters={aboutMeData.forRecruiters}
            forEngineers={aboutMeData.forEngineers}
          />
          <Education items={educationData} />
          <Experience items={experienceData} />

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-left">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Git",
                "Responsive Design",
                "UI/UX",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <Certifications items={certificationData} />

          {/* Contact Form */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-left">
              Contact Me
            </h2>
            <form className="space-y-4">
              <Input placeholder="Your Name" className="bg-secondary" />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-secondary"
              />
              <Textarea placeholder="Your Message" className="bg-secondary" />
              <LitUpButton type="submit">Send Message</LitUpButton>
            </form>
          </section>

          {/* Social Media */}
          <section className="flex justify-center space-x-4">
            <Github size={200} />
            <Button variant="outline">
              <Github size={200} />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
}
