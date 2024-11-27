import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Certifications({
  items
}) {
  return (
    (<section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">Certifications</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <Card key={index}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.issuer}</p>
              </div>
              <Badge variant="secondary">{item.year}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>)
  );
}

