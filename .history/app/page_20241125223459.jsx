import { Github, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"

export default function Portfolio() {
  return (
    (<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto">
        {/* Header / Intro Section */}
        <header className="text-center mb-16">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Profile Picture"
            width={150}
            height={150}
            className="mx-auto rounded-full shadow-lg mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Jane Doe</h1>
          <p className="text-xl text-gray-600">Full Stack Web Developer</p>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a passionate full stack developer with 5 years of experience creating robust and scalable web applications. 
            I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me 
            exploring new technologies or contributing to open-source projects.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["JavaScript", "React", "Node.js", "Python", "SQL", "GraphQL"].map((skill) => (
              <div key={skill} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "E-commerce Platform", description: "A full-stack e-commerce solution with React and Node.js" },
              { title: "Task Management App", description: "A React Native mobile app for managing daily tasks" },
              { title: "Data Visualization Dashboard", description: "An interactive dashboard using D3.js and React" },
              { title: "Blog CMS", description: "A custom Content Management System built with Python and Django" },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get In Touch</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com" className="text-gray-700 hover:text-gray-900">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" className="text-gray-700 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:jane@example.com"
              className="text-gray-700 hover:text-gray-900">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </section>
      </main>
    </div>)
  );
}

