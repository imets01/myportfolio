import { Card, CardContent } from "@/components/ui/card";

export function Experience({ items }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-left">Experience</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <Card key={index} className="bg-secondary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-accent-foreground">{item.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{item.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {item.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
