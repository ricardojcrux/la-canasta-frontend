import { DashboardHeader } from '@/components/ui/DashboardHeader';
import { ShoppingListCard } from '@/components/ui/ShoppingListCard';

export default function Dashboard() {
  const shoppingLists = [
    { id: 1, title: 'Compras del mes', total: 12, date: '2025-11-01', budget: 150 },
    { id: 2, title: 'Fiesta familiar', total: 18, date: '2025-10-25', budget: 200 },
    { id: 3, title: 'Despensa básica', total: 8, budget: 80 },
    { id: 4, title: 'Fin de semana', total: 5, date: '2025-10-20' },
  ];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="mx-auto max-w-7xl">
        <DashboardHeader />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shoppingLists.map((list, index) => (
            <ShoppingListCard key={list.id} {...list} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
