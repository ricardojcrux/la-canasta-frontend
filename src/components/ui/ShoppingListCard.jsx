import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Calendar, DollarSign } from 'lucide-react';

export function ShoppingListCard({ id, title, total, date, budget, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
        <CardContent className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <h2 className="mb-2 text-xl font-semibold text-foreground">{title}</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShoppingCart className="h-4 w-4" />
                <span>{total} productos</span>
              </div>
            </div>
          </div>
          
          {(date || budget) && (
            <div className="mb-4 space-y-2 border-t pt-3">
              {date && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{date}</span>
                </div>
              )}
              {budget && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span>Presupuesto: ${budget}</span>
                </div>
              )}
            </div>
          )}

          <Button asChild className="w-full" variant="secondary">
            <Link to={`/list/${id}`}>Ver Lista</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
