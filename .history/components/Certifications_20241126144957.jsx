import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Certifications({ items }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-left">Certifications</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <Card key={index} className="bg-secondary">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.issuer}</p>
              </div>
              <Badge variant="secondary">{item.year}</Badge>
              <p className="text-sm font-medium">{item.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
