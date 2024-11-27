import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Education } from "@/components/Education.jsx";
import { Experience } from "@/components/Experience.jsx";

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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Hi there,
            <br />I am <span className="text-primary">Jon Doe</span>
          </h1>
          <p className="text-xl mb-4">
            A passionate web developer creating amazing digital experiences.
          </p>
          <Button>Download CV</Button>
        </section>

        <Education items={educationData} />
        <Experience items={experienceData} />

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
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

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc list-inside">
            <li>AWS Certified Developer - Associate</li>
            <li>Google Analytics Certification</li>
            <li>Scrum Master Certification</li>
          </ul>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit">Send Message</Button>
          </form>
        </section>

        {/* Social Media */}
        <section className="flex justify-center space-x-4">
          <Button variant="outline" size="icon">
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="h-4 w-4" />
          </Button>
        </section>
      </main>
    </div>
  );
}
