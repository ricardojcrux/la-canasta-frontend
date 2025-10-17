import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Package } from 'lucide-react';
import { useState } from 'react';

export function ProductItem({ id, name, quantity, purchased: initialPurchased, index }) {
  const [purchased, setPurchased] = useState(initialPurchased);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className={`p-4 transition-all duration-300 ${purchased ? 'bg-muted/50' : ''}`}>
        <div className="flex items-center gap-4">
          <Checkbox
            checked={purchased}
            onCheckedChange={(checked) => setPurchased(checked)}
            className="h-5 w-5"
          />
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
            <Package className="h-5 w-5 text-secondary" />
          </div>
          <div className="flex-1">
            <p className={`text-lg font-semibold ${purchased ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
              {name}
            </p>
            <p className="text-sm text-muted-foreground">Cantidad: {quantity}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
