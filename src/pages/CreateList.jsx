import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { ArrowLeft, ListPlus } from "lucide-react";
import logoCanasta from "@/assets/la-canasta-logo-sin-texto.png";

export default function CreateList() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f8fafc] via-white to-[#f0fdf4] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6"
      >
        {/* Botón de volver */}
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-4 gap-2 text-[#007C89] hover:bg-[#e8f6f4]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Button>

        {/* Encabezado con logo */}
        <div className="mb-8 flex flex-col items-center text-center">
          <motion.img
            src={logoCanasta}
            alt="Logo La Canasta"
            className="w-16 h-auto mb-4 drop-shadow-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-[#007C89]"
          >
            Nueva Lista
          </motion.h1>
          <p className="mt-2 text-sm text-gray-600">
            Organiza tus próximas compras
          </p>
        </div>

        {/* Formulario */}
        <Card className="border border-gray-100 shadow-md rounded-xl">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor="title">Título de la lista</Label>
                <Input
                  id="title"
                  placeholder="Ej: Compras del mes"
                  className="mt-1 focus:border-[#007C89] focus:ring-[#007C89]"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Label htmlFor="date">Fecha objetivo (opcional)</Label>
                <Input
                  id="date"
                  type="date"
                  className="mt-1 focus:border-[#007C89] focus:ring-[#007C89]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Label htmlFor="budget">Presupuesto (opcional)</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="Ej: 150"
                  className="mt-1 focus:border-[#007C89] focus:ring-[#007C89]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-[#F15A29] hover:bg-[#d94f23] text-white font-semibold rounded-xl shadow-md"
                >
                  Crear Lista
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
