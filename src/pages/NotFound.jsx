import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops... página no encontrada 😅</p>
      <Link
        to="/"
        className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-hover transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
