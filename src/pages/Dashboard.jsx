import { DashboardHeader } from "@/components/ui/DashboardHeader";
import { ShoppingListCard } from "@/components/ui/ShoppingListCard";
import { motion } from "framer-motion";

export default function Dashboard() {
  const shoppingLists = [
    { id: 1, title: "Compras del mes", total: 12, date: "2025-11-01", budget: 150000 },
    { id: 2, title: "Fiesta familiar", total: 18, date: "2025-10-25", budget: 200000 },
    { id: 3, title: "Despensa básica", total: 8, budget: 80000 },
    { id: 4, title: "Fin de semana", total: 5, date: "2025-10-20" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-white to-[#f0fdf4] p-6 sm:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl"
      >
        {/* Encabezado con logo y botón */}
        <DashboardHeader />

        {/* Línea divisoria sutil */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Tarjetas de listas de compras */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {shoppingLists.map((list, index) => (
            <ShoppingListCard key={list.id} {...list} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
