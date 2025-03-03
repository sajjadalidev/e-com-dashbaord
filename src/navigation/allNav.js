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
    path: "/admin/dashboard/category",
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
}
]