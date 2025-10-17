import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/ui/AuthLayout";
import { motion } from "framer-motion";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <Card className="shadow-[var(--shadow-card)] border border-gray-100">
        <CardContent className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-center text-[#007C89]">
            Crear Cuenta
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label htmlFor="name" className="text-[#007C89]">
                Nombre
              </Label>
              <Input
                id="name"
                placeholder="Juan"
                className="mt-1 focus-visible:ring-[#007C89]"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Label htmlFor="lastname" className="text-[#007C89]">
                Apellido
              </Label>
              <Input
                id="lastname"
                placeholder="Pérez"
                className="mt-1 focus-visible:ring-[#007C89]"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Label htmlFor="email" className="text-[#007C89]">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="usuario@correo.com"
                className="mt-1 focus-visible:ring-[#007C89]"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Label htmlFor="password" className="text-[#007C89]">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 focus-visible:ring-[#007C89]"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                type="submit"
                className="w-full bg-[#F15A29] hover:bg-[#d94f23] text-white font-semibold"
              >
                Registrarse
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-sm text-gray-600"
            >
              ¿Ya tienes cuenta?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#007C89] hover:underline"
              >
                Inicia sesión
              </Link>
            </motion.p>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
