import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getNav } from "../navigation";
import { BiLogOutCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function Sidebar({ showSideBar, setShowSideBar }) {
  const { role } = useSelector((state) => state.auth);
  const [allNav, setAllNav] = useState([]);
  console.log("🚀 ~ Sidebar ~ allNav:", allNav);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const navs = getNav(role);
    setAllNav(navs);
  }, [role]);

  return (
    <div>
      <div
        onClick={() => setShowSideBar(false)}
        className={`fixed duration-200 ${
          !showSideBar ? "invisible" : "visible"
        } w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}
      ></div>
      <div
        className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/5%)] transition-all ${
          showSideBar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img className="h-full w-full" src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="px-[16px]">
          <ul>
            {allNav.map((nav, i) => (
              <li key={i}>
                {" "}
                <Link
                  to={nav.path}
                  className={`${
                    pathname === nav.path
                      ? "bg-blue-600 shadow-indigo-500/50 text-white duration-500"
                      : "text-[#030811] font-bold duration-200"
                  } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1`}
                >
                  <span>{nav.icon}</span>
                  <span>{nav.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  navigate("/login");
                }}
                className="text-[#030811] font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1"
              >
                <span>
                  <BiLogOutCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
