import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductItem } from '@/components/ui/ProductItem';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus, ShoppingBasket } from 'lucide-react';

export default function ShoppingListView() {
  const navigate = useNavigate();
  const { id } = useParams();

  const items = [
    { id: 1, name: 'Leche entera', quantity: 2, purchased: false },
    { id: 2, name: 'Pan integral', quantity: 1, purchased: true },
    { id: 3, name: 'Huevos', quantity: 12, purchased: false },
    { id: 4, name: 'Arroz', quantity: 1, purchased: false },
    { id: 5, name: 'Aceite de oliva', quantity: 1, purchased: true },
  ];

  const purchasedCount = items.filter(item => item.purchased).length;
  const totalItems = items.length;

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="mb-4 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Button>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/80 shadow-[var(--shadow-soft)]">
                <ShoppingBasket className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Compras del mes</h1>
                <p className="text-sm text-muted-foreground">
                  {purchasedCount} de {totalItems} completados
                </p>
              </div>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Agregar Producto
            </Button>
          </div>
        </motion.div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <ProductItem key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
