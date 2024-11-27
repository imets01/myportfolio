export function Contact() {
  {
    /* Contact Form */
  }
  <section className="mb-16">
    <h2 className="text-lg font-semibold md:text-4xl mb-4 text-primary max-w-4xl">
      Contact Me
    </h2>
    <form className="space-y-4">
      <Input placeholder="Your Name" className="bg-secondary" />
      <Input
        type="email"
        placeholder="Your Email"
        className="bg-secondary text-cyan-200"
      />
      <Textarea placeholder="Your Message" className="bg-secondary" />
      <LitUpButton type="submit">Send Message</LitUpButton>
    </form>
  </section>;
}
