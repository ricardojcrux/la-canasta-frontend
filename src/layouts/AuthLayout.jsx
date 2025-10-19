import { motion } from "framer-motion";
import logoCanasta from "@/assets/la-canasta-logo.png"; // 👈 asegúrate de que exista en /src/assets/

export function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen items-top justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        {/* Logo animado */}
        <div className="flex flex-col items-center">
          <motion.img
            src={logoCanasta}
            alt="Logo La Canasta"
            className="w-100 mt-8 h-auto drop-shadow-lg" // 🔹 Logo más grande y centrado visualmente
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          />
        </div>

        {/* Contenido dinámico (Login, Registro, etc.) */}
        <div className="mx-auto w-2/3">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
