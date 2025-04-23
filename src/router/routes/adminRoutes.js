import { lazy } from "react";

// Lazy-loaded components
const Dashboard = lazy(() => import("../../views/admin/Dashboard.jsx"));
const Orders = lazy(() => import("../../views/admin/order/Orders.jsx"))
const Categories = lazy(() => import("../../views/admin/Categories.jsx"))
const Sellers = lazy(() => import("../../views/admin/sellers/Sellers.jsx"));
const PaymentRequests = lazy(() => import("../../views/admin/PaymentRequests.jsx"));
const DeActivateSellers = lazy(() => import("../../views/admin/sellers/DeActivateSeller.jsx"));
const SellerRequest = lazy(() => import('../../views/admin/sellers/SellerRequest.jsx'));
const ChatSeller = lazy(() => import("../../views/admin/ChatSeller.jsx"));
const SellerDetails = lazy(() => import("../../views/admin/sellers/SellerDetails.jsx"));
const OrderDetials = lazy(() => import("../../views/admin/order/OrderDetails.jsx"));

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
        path: "admin/dashboard/orders/details/:orderId",
        element: <OrderDetials />,
        role: "admin"
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
    {
        path: "admin/dashboard/seller-request",
        element: <SellerRequest />,
        role: 'admin',
    },
    {
        path: "admin/dashboard/chat-seller",
        element: <ChatSeller />,
        role: 'admin',
    },
    {
        path: "admin/dashboard/seller/detail/:sellerId",
        element: <SellerDetails />,
        role: 'admin',
    },

];