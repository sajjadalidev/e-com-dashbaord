import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"));

export const sellerRoutes = [
    {
        path: "/", // URL
        element: <Home />,
        ability: ['admin', 'seller'],
    },

];