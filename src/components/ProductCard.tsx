import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ProductCard = ({ icon: Icon, title, description, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <Card className="p-6 h-full gradient-card border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-glow cursor-pointer">
        <motion.div
          className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 shadow-glow"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="h-8 w-8 text-primary-foreground" />
        </motion.div>
        <h3 className="text-2xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
