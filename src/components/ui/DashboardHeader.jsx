import { motion } from 'framer-motion';
import { ShoppingBasket, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-[var(--shadow-soft)]">
          <ShoppingBasket className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mis Listas</h1>
          <p className="text-sm text-muted-foreground">Organiza tus compras fácilmente</p>
        </div>
      </div>
      <Button asChild size="lg" className="gap-2">
        <Link to="/new-list">
          <Plus className="h-5 w-5" />
          Nueva Lista
        </Link>
      </Button>
    </motion.div>
  );
}
