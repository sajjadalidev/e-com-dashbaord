import { lazy } from "react";

// Lazy-loaded components
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard.jsx"));

export const adminRoutes = [
    {
        path: "admin/dashboard", // URL
        element: <AdminDashboard />,
        role: 'admin',
    },

];