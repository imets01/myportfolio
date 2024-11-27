import { Button } from "@/components/ui/button"

export function Intro({
  name,
  tagline
}) {
  return (
    (<section
      className="sticky top-0 z-10 h-screen flex flex-col justify-center bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-6xl font-bold mb-6">
          Hi there,<br />
          I am <span className="text-primary">{name}</span>
        </h1>
        <p className="text-2xl mb-8 max-w-2xl">{tagline}</p>
        <Button size="lg">Download CV</Button>
      </div>
    </section>)
  );
}

