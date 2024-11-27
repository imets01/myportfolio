import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Portfolio() {
  return (
    (<div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Hi there,<br />
            I am <span className="text-primary">Jon Doe</span>
          </h1>
          <p className="text-xl mb-4">A passionate web developer creating amazing digital experiences.</p>
          <Button>Download CV</Button>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Bachelor of Science in Computer Science</h3>
              <p>University of Technology, 2018-2022</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Web Development Bootcamp</h3>
              <p>Code Academy, 2023</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Junior Web Developer</h3>
              <p>Tech Solutions Inc., 2022-Present</p>
              <ul className="list-disc list-inside">
                <li>Developed responsive web applications using React and Node.js</li>
                <li>Collaborated with design team to implement user-friendly interfaces</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Web Development Intern</h3>
              <p>StartUp Co., Summer 2021</p>
              <ul className="list-disc list-inside">
                <li>Assisted in the development of company website</li>
                <li>Gained experience with version control using Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "Responsive Design", "UI/UX"].map((skill) => (
              <span
                key={skill}
                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
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
    </div>)
  );
}

