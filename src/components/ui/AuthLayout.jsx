import { motion } from "framer-motion";
import logoCanasta from "@/assets/la-canasta-logo.png"; // 👈 asegúrate de que exista en /src/assets/

export function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        {/* Logo animado */}
        <div className="mb-12 flex flex-col items-center">
          <motion.img
            src={logoCanasta}
            alt="Logo La Canasta"
            className="w-60 h-auto drop-shadow-lg mt-8" // 🔹 Logo más grande y centrado visualmente
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          />
        </div>

        {/* Contenido dinámico (Login, Registro, etc.) */}
        <div className="scale-105">{children}</div>
      </motion.div>
    </div>
  );
}
