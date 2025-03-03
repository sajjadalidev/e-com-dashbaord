// Package Block
import { useState } from "react";
import { Outlet } from "react-router-dom";

// Custom Components Block
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="bg-[#cdcae9] w-full min-h-screen">
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </div>
  );
}
