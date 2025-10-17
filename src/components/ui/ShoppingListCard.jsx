import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Calendar, DollarSign } from "lucide-react";

export function ShoppingListCard({ id, title, total, date, budget, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <Card className="overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md rounded-2xl">
        <CardContent className="p-6">
          {/* Título y productos */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <h2 className="mb-2 text-xl font-semibold text-[#007C89]">
                {title}
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShoppingCart className="h-4 w-4 text-[#F15A29]" />
                <span>{total} productos</span>
              </div>
            </div>
          </div>

          {/* Fecha y presupuesto */}
          {(date || budget) && (
            <div className="mb-4 space-y-2 border-t border-gray-100 pt-3">
              {date && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4 text-[#F15A29]" />
                  <span>{new Date(date).toLocaleDateString()}</span>
                </div>
              )}
              {budget && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="h-4 w-4 text-[#F15A29]" />
                  <span>
                    Presupuesto:{" "}
                    <span className="font-semibold text-[#007C89]">
                      ${budget}
                    </span>
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Botón Ver Lista */}
          <Button
            asChild
            className="w-full bg-[#F15A29] hover:bg-[#d94f23] text-white font-semibold rounded-xl shadow-md transition-all duration-200"
          >
            <Link to={`/list/${id}`}>Ver Lista</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
