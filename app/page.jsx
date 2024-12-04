import Portfolio from "@/components/portfolio";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div>
      <Analytics />
      <Portfolio />
    </div>
  );
}
