import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoCanasta from "@/assets/la-canasta-logo-sin-texto.png"; // 👈 tu logo

export function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      {/* Logo y título */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            src={logoCanasta}
            alt="Logo La Canasta"
            className="w-10 h-auto drop-shadow-md" // 🔹 Más pequeño y proporcionado
          />
        </div>

        {/* Texto */}
        <div>
          <h1 className="text-3xl font-bold text-primary">Mis Listas</h1>
          <p className="text-sm text-gray-600">
            Organiza tus compras fácilmente
          </p>
        </div>
      </div>

      {/* Botón Nueva Lista */}
      <Button
        asChild
        size="lg"
        className="gap-2 bg-[#F15A29] hover:bg-[#d94f23] text-white font-semibold shadow-md"
      >
        <Link to="/new-list">
          <Plus className="h-5 w-5" />
          Nueva Lista
        </Link>
      </Button>
    </motion.div>
  );
}
