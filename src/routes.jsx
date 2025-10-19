import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { AuthLayout } from './layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ShoppingListView from './pages/ShoppingListView';
import CreateList from './pages/CreateList';
import NotFound from './pages/NotFound';

// Layout Wrappers
const AuthWrapper = () => (
  <AuthLayout>
    <Outlet />
  </AuthLayout>
);

const DashboardWrapper = () => (
  <DashboardLayout>
    <Outlet />
  </DashboardLayout>
);

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route element={<AuthWrapper />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route element={<DashboardWrapper />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="lists/create" element={<CreateList />} />
        <Route path="lists/:id" element={<ShoppingListView />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
