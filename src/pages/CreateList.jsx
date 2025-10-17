import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, X } from "lucide-react";
import logoCanasta from "@/assets/la-canasta-logo-sin-texto.png";

export default function CreateList() {
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, product]);
    setShowAddModal(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f8fafc] via-white to-[#f0fdf4] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        {/* Botón volver */}
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-4 gap-2 text-[#007C89] hover:bg-[#e8f6f4]"
        >
          <ArrowLeft className="h-4 w-4" /> Volver
        </Button>

        {/* Encabezado con logo */}
        <div className="mb-8 flex flex-col items-center text-center">
          <motion.img
            src={logoCanasta}
            alt="Logo La Canasta"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-4 w-20 h-auto drop-shadow-md"
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-[#1f2937]"
          >
            Nueva Lista
          </motion.h1>
          <p className="mt-2 text-sm text-gray-500">
            Organiza tus próximas compras
          </p>
        </div>

        {/* Formulario principal */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardContent className="p-6 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Título de la lista</Label>
                <Input
                  id="title"
                  placeholder="Ej: Compras del mes"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="date">Fecha objetivo (opcional)</Label>
                <Input id="date" type="date" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="budget">Presupuesto (opcional)</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="Ej: 150"
                  className="mt-1"
                />
              </div>

              {/* Botones */}
              <div className="flex justify-between items-center mt-6">
                <Button
                  type="button"
                  onClick={() => setShowAddModal(true)}
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white"
                >
                  + Agregar Producto
                </Button>
                <Button type="submit" variant="secondary">
                  Crear Lista
                </Button>
              </div>
            </form>

            {/* Mostrar productos agregados */}
            {products.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Productos agregados:
                </h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {products.map((p, i) => (
                    <li key={i}>
                      • {p.name} ({p.quantity}) — ${p.unit_price}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Modal AddProduct */}
        <AnimatePresence>
          {showAddModal && (
            <AddProductModal
              onClose={() => setShowAddModal(false)}
              onSave={handleAddProduct}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function AddProductModal({ onClose, onSave }) {
  const [product, setProduct] = useState({
    name: "",
    quantity: 1,
    unit_price: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProduct((prev) => ({ ...prev, [id]: value }));
  };

  const handleAdd = () => {
    if (!product.name || !product.unit_price) return;
    onSave(product);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm relative"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Encabezado del modal */}
        <div className="flex flex-col items-center mb-4">
          <img src={logoCanasta} alt="Logo La Canasta" className="w-12 mb-3" />
          <h2 className="text-xl font-semibold text-[#f97316]">
            Agregar Producto
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Añade un producto a tu lista
          </p>
        </div>

        {/* Campos del producto */}
        <div className="space-y-3">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              placeholder="Ej: Leche entera"
              value={product.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="quantity">Cantidad</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={product.quantity}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="unit_price">Precio unitario</Label>
            <Input
              id="unit_price"
              type="number"
              step="0.01"
              placeholder="Ej: 2500"
              value={product.unit_price}
              onChange={handleChange}
            />
          </div>

          <Button
            onClick={handleAdd}
            className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold mt-4 rounded-xl shadow-md"
          >
            Guardar Producto
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
