import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Plus, Minus, X } from "lucide-react";
import logoCanasta from "@/assets/la-canasta-logo-sin-texto.png";

// ✅ Simulamos las mismas listas del Dashboard
const shoppingLists = [
  { id: 1, title: "Compras del mes", total: 12, date: "2025-11-01", budget: 150000 },
  { id: 2, title: "Fiesta familiar", total: 18, date: "2025-10-25", budget: 200000 },
  { id: 3, title: "Despensa básica", total: 8, budget: 80000 },
  { id: 4, title: "Fin de semana", total: 5, date: "2025-10-20" },
];

export default function ShoppingListView() {
  const navigate = useNavigate();
  const { id } = useParams();

  // 🔍 Buscar los datos de la lista actual
  const list = shoppingLists.find((l) => l.id === Number(id));

  // Estado de productos (simulado)
  const [items, setItems] = useState([
    { id: 1, name: "Leche entera", quantity: 2, price: 3000, purchased: false },
    { id: 2, name: "Pan integral", quantity: 1, price: 2500, purchased: true },
    { id: 3, name: "Huevos", quantity: 12, price: 600, purchased: false },
    { id: 4, name: "Arroz", quantity: 1, price: 5000, purchased: false },
    { id: 5, name: "Aceite de oliva", quantity: 1, price: 18000, purchased: true },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddProduct = (product) => {
    setItems((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: product.name,
        quantity: Number(product.quantity),
        price: Number(product.unit_price),
        purchased: false,
      },
    ]);
    setShowAddModal(false);
  };

  const handleTogglePurchased = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  const handleQuantityChange = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const purchasedCount = items.filter((item) => item.purchased).length;
  const totalItems = items.length;
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!list) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-500">
        Lista no encontrada 😕
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f8fafc] via-white to-[#f0fdf4] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 relative"
      >
        {/* Botón volver */}
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-4 gap-2 text-[#007C89] hover:bg-[#e8f6f4]"
        >
          <ArrowLeft className="h-4 w-4" /> Volver
        </Button>

        {/* Encabezado dinámico */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <motion.img
              src={logoCanasta}
              alt="Logo La Canasta"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="h-14 w-14 object-contain"
            />

            <div>
              <h1 className="text-2xl font-bold text-[#1f2937]">{list.title}</h1>
              <p className="text-sm text-gray-500">
                {purchasedCount} de {totalItems} completados
              </p>
              {list.date && (
                <p className="text-xs text-gray-400">
                  Fecha objetivo: {new Date(list.date).toLocaleDateString()}
                </p>
              )}
              {list.budget && (
                <p className="text-xs text-gray-400">
                  Presupuesto: ${list.budget}
                </p>
              )}
            </div>
          </div>

          <Button
            className="gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-xl shadow-md"
            onClick={() => setShowAddModal(true)}
          >
            <Plus className="h-4 w-4" />
            Agregar Producto
          </Button>
        </div>

        {/* Lista de productos */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center justify-between border rounded-xl p-4 shadow-sm transition ${
                item.purchased ? "bg-green-50 border-green-300" : "bg-white"
              }`}
            >
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => handleTogglePurchased(item.id)}
              >
                <input
                  type="checkbox"
                  checked={item.purchased}
                  onChange={() => handleTogglePurchased(item.id)}
                  className="accent-[#f97316] h-5 w-5"
                />
                <div>
                  <p
                    className={`font-semibold ${
                      item.purchased
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    ${item.price.toLocaleString()} c/u
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="h-8 w-8 text-gray-600 hover:text-[#f97316]"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-6 text-center font-medium text-gray-700">
                  {item.quantity}
                </span>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handleQuantityChange(item.id, +1)}
                  className="h-8 w-8 text-gray-600 hover:text-[#f97316]"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-6 flex justify-end">
          <p className="text-lg font-semibold text-[#1f2937]">
            Total:{" "}
            <span className="text-[#f97316]">
              ${totalPrice.toLocaleString()}
            </span>
          </p>
        </div>

        {/* Modal para agregar producto */}
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
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center mb-4">
          <img src={logoCanasta} alt="Logo La Canasta" className="w-12 mb-3" />
          <h2 className="text-xl font-semibold text-[#f97316]">
            Agregar Producto
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Añade un producto a tu lista
          </p>
        </div>

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
