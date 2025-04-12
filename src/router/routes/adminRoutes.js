import { lazy } from "react";

// Lazy-loaded components
const Dashboard = lazy(() => import("../../views/admin/Dashboard.jsx"));
const Orders = lazy(() => import("../../views/admin/Orders.jsx"))
const Categories = lazy(() => import("../../views/admin/Categories.jsx"))
const Sellers = lazy(() => import("../../views/admin/Sellers.jsx"));
const PaymentRequests = lazy(() => import("../../views/admin/PaymentRequests.jsx"));
const DeActivateSellers = lazy(() => import("../../views/admin/DeActivateSeller.jsx"));

export const adminRoutes = [
    {
        path: "admin/dashboard",
        element: <Dashboard />,
        role: 'admin',
    },
    {
        path: "admin/dashboard/orders",
        element: <Orders />,
        role: 'admin',
    },
    {
        path: "admin/dashboard/categories",
        element: <Categories />,
        role: 'admin',
    },
    {
        path: "admin/dashboard/sellers",
        element: <Sellers />,
        role: 'admin',
    },
    {
        path: "admin/dashboard/payment-request",
        element: <PaymentRequests />,
        role: 'admin',
    },
    {
        path: "admin/dashboard/deactivate-sellers",
        element: <DeActivateSellers />,
        role: 'admin',
    },

];