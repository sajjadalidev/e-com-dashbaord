import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"));
const SellerDashbaord = lazy(() => import('./../../views/seller/SellerDashbaord'));
const AddProduct = lazy(() => import('./../../views/seller/product/AddProduct'));
const Products = lazy(() => import('../../views/seller/product/Products'));


export const sellerRoutes = [
    {
        path: "/", // URL
        element: <Home />,
        ability: ['admin', 'seller'],
    },
    {
        path: "/seller/dashboard", // URL
        element: <SellerDashbaord />,
        ability: ['seller'],
    },
    {
        path: "/seller/dashboard/add-product", // URL
        element: <AddProduct />,
        ability: ['seller'],
    },
    {
        path: "/seller/dashboard/products", // URL
        element: <Products />,
        ability: ['seller'],
    },
];