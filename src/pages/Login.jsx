import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/layouts/AuthLayout";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      {/* Tarjeta de login */}
      <Card>
        <CardContent className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-center text-primary">
            Iniciar Sesión
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label htmlFor="email" className="text-primary">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="usuario@correo.com"
                className="mt-1 focus-visible:ring-primary"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Label htmlFor="password" className="text-primary">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 focus-visible:ring-primary"
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
                className="w-full bg-secondary hover:bg-secondary-hover text-white font-semibold hover:cursor-pointer"
              >
                Ingresar
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-sm text-gray-600"
            >
              ¿No tienes cuenta?{" "}
              <Link
                to="/register"
                className="font-semibold text-primary hover:underline"
              >
                Regístrate
              </Link>
            </motion.p>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
