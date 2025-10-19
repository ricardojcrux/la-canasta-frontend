import { Button } from "@/components/ui/button";
import logoCanasta from "../assets/la-canasta-logo-blanco-sin-texto.png";
import { useNavigate } from "react-router-dom";

export function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen space-y-8">
      <nav className="flex bg-primary items-center justify-between px-16 py-2">
        <img src={logoCanasta} alt="logo" className="w-12 h-auto" />
        <Button className="bg-secondary hover:bg-secondary-hover text-white font-semibold hover:cursor-pointer" onClick={handleLogout}>Cerrar sesión</Button>
      </nav>
      <section className="px-16">
        {children}
      </section>
    </div>
  );
}