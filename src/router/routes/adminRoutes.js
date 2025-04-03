import { lazy } from "react";

// Lazy-loaded components
const Dashboard = lazy(() => import("../../views/admin/Dashboard.jsx"));
const Orders = lazy(() => import("../../views/admin/Orders.jsx"))
const Categories = lazy(() => import("../../views/admin/Categories.jsx"))


export const adminRoutes = [
    {
        path: "admin/dashboard", // URL
        element: <Dashboard />,
        role: 'admin',
    },
    {
        path: "admin/dashboard/orders", // URL
        element: <Orders />,
        role: 'admin',
    },
    {
        path: "admin/dashboard/categories", // URL
        element: <Categories />,
        role: 'admin',
    },

];