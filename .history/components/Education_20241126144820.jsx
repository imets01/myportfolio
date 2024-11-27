import { Card, CardContent } from "@/components/ui/card";

export function Education({ items }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-left">Education</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">{item.degree}</h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{item.year}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.duration}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
