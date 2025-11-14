import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;

  content: string;
  rating: number;
}

const TestimonialCard = ({ name,  content, rating }: TestimonialCardProps) => {
  return (
    <Card className="p-8 gradient-card border-2 border-primary/10 shadow-card">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed italic">
        "{content}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-foreground">{name}</h4>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
