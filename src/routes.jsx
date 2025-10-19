import { Navigate, Outlet } from 'react-router-dom';
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

// Routes configuration
export const routes = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    element: <AuthWrapper />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    element: <DashboardWrapper />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'lists/create',
        element: <CreateList />,
      },
      {
        path: 'lists/:id',
        element: <ShoppingListView />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
