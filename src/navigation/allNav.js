import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers, FaUserTimes } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { MdPayment } from "react-icons/md";

export const allNav = [{
    id: 1,
    title: "Dashboard",
    path: "/admin/dashboard",
    role: "admin",
    icon: <AiOutlineDashboard />
},
{
    id: 2,
    title: "Orders",
    path: "/admin/dashboard/orders",
    role: "admin",
    icon: <AiOutlineShoppingCart />
},
{
    id: 3,
    title: "Category",
    path: "admin/dashboard/categories",
    role: "admin",
    icon: <BiCategory />
},
{
    id: 4,
    title: "Seller",
    path: "/admin/dashboard/sellers",
    role: "admin",
    icon: <FaUsers />
},
{
    id: 5,
    title: "Payment Requests",
    path: "/admin/dashboard/payment-request",
    role: "admin",
    icon: <MdPayment />
},
{
    id: 6,
    title: "Deactivate Sellers",
    path: "/admin/dashboard/deactivate-sellers",
    role: "admin",
    icon: <FaUserTimes />
},
{
    id: 7,
    title: "Seller Request",
    path: "/admin/dashboard/sellers-request",
    role: "admin",
    icon: <FaCodePullRequest />
},
{
    id: 8,
    title: "Live Chat",
    path: "/admin/dashboard/chat-seller",
    role: "admin",
    icon: <IoIosChatbubbles />
},
{
    id: 9,
    title: "Dashboard",
    path: "/seller/dashboard",
    role: "seller",
    icon: <AiOutlineDashboard />
},
{
    id: 10,
    title: "Add Product",
    path: "/seller/add-product",
    role: "seller",
    icon: <AiOutlineDashboard />
},
{
    id: 11,
    title: "All Product",
    path: "/seller/products",
    role: "seller",
    icon: <AiOutlineDashboard />
},
{
    id: 12,
    title: "Discount Product",
    path: "/seller/add-product",
    role: "seller",
    icon: <AiOutlineDashboard />
},
{
    id: 12,
    title: "Orders",
    path: "/seller/orders",
    role: "seller",
    icon: <AiOutlineDashboard />
},
{
    id: 13,
    title: "Payments",
    path: "/seller/payments",
    role: "seller",
    icon: <AiOutlineDashboard />
},
{
    id: 14,
    title: "Chat Customer",
    path: "/seller/chat-customer",
    role: "seller",
    icon: <AiOutlineDashboard />
},
{
    id: 15,
    title: "Chat Support",
    path: "/seller/chat-support",
    role: "seller",
    icon: <AiOutlineDashboard />
},
{
    id: 16,
    title: "Profile",
    path: "/seller/profile",
    role: "seller",
    icon: <AiOutlineDashboard />
},
]