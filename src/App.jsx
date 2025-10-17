import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'

// Colores principales del logo
const colors = {
  orange: '#F15A29', // color "La Canasta"
  teal: '#0E7778', // color del carrito
}

// Login
function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-6" style={{ color: colors.orange }}>Iniciar Sesión</h1>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" placeholder="usuario@correo.com" />
            </div>
            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="********" />
            </div>
            <Button className="w-full" style={{ backgroundColor: colors.teal }}>Ingresar</Button>
            <p className="text-center text-sm mt-4">
              ¿No tienes cuenta? <Link to="/register" className="text-orange-600 font-semibold">Regístrate</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Registro
function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-6" style={{ color: colors.orange }}>Crear Cuenta</h1>
          <div className="space-y-4">
            <Input placeholder="Nombre" />
            <Input placeholder="Apellido" />
            <Input placeholder="Correo electrónico" />
            <Input type="password" placeholder="Contraseña" />
            <Button className="w-full" style={{ backgroundColor: colors.teal }}>Registrarse</Button>
            <p className="text-center text-sm mt-4">
              ¿Ya tienes cuenta? <Link to="/login" className="text-orange-600 font-semibold">Inicia sesión</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Dashboard (listado de listas de compras)
function Dashboard() {
  const shoppingLists = [
    { id: 1, title: 'Compras del mes', total: 5 },
    { id: 2, title: 'Fiesta familiar', total: 8 },
  ]

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold" style={{ color: colors.orange }}>Mis Listas</h1>
        <Button asChild style={{ backgroundColor: colors.teal }}>
          <Link to="/new-list">+ Nueva Lista</Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shoppingLists.map(list => (
          <Card key={list.id} className="hover:shadow-xl transition">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{list.title}</h2>
              <p className="text-gray-500">{list.total} productos</p>
              <Button asChild className="mt-3" style={{ backgroundColor: colors.orange }}>
                <Link to={`/list/${list.id}`}>Ver Lista</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Vista personalizada por lista
function ShoppingListView() {
  const items = [
    { id: 1, name: 'Leche', quantity: 2, purchased: false },
    { id: 2, name: 'Pan', quantity: 1, purchased: true },
  ]

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6" style={{ color: colors.orange }}>Compras del mes</h1>
      <div className="space-y-4">
        {items.map(item => (
          <Card key={item.id} className="p-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-500">Cantidad: {item.quantity}</p>
            </div>
            <Button variant={item.purchased ? 'secondary' : 'default'} style={{ backgroundColor: item.purchased ? '#ccc' : colors.teal }}>
              {item.purchased ? 'Comprado' : 'Marcar como comprado'}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Creación de lista
function CreateList() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-6" style={{ color: colors.orange }}>Nueva Lista</h1>
          <div className="space-y-4">
            <Input placeholder="Título de la lista" />
            <Input type="date" placeholder="Fecha objetivo" />
            <Input type="number" placeholder="Presupuesto" />
            <Button className="w-full" style={{ backgroundColor: colors.teal }}>Crear</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// App principal
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list/:id" element={<ShoppingListView />} />
        <Route path="/new-list" element={<CreateList />} />
      </Routes>
    </Router>
  )
}
