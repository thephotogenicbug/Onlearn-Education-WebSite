import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";

const menuItems = [
  { icon: "fa-house", label: "Dashboard", path: "/admin/dashboard" },
  { icon: "fa-shapes", label: "Add New Course", path: "/admin/add-course" },
  {
    icon: "fa-user-graduate",
    label: "View Courses",
    path: "/admin/view-courses",
  },
  { icon: "fa-arrows-to-eye", label: "Assessments" },
  { icon: "fa-certificate", label: "Certifications" },
  { icon: "fa-tarp-droplet", label: "Projects" },
  { icon: "fa-right-from-bracket", label: "Logout" },
];

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  return (
    <div
      className={`bg-white shadow-lg h-screen transition-all duration-300 ease-in-out flex flex-col ${
        isCollapsed ? "w-[80px]" : "w-[260px]"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && (
          <img
            src={assets.logo}
            alt="logo"
            className="w-32 object-contain transition-all duration-300"
          />
        )}
        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="text-gray-600 text-xl focus:outline-none ml-auto"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <ul className="mt-6 space-y-2 px-2">
        {menuItems.map(({ icon, label, path }) => {
          const isActive = path && location.pathname === path;
          const ItemContent = (
            <>
              <i className={`fa-solid ${icon} text-lg`}></i>
              {!isCollapsed && (
                <span className="text-sm font-medium">{label}</span>
              )}
            </>
          );

          return (
            <li key={label}>
              {path ? (
                <Link
                  to={path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-gray-100 ${
                    isActive
                      ? "bg-gray-200 font-semibold text-[#0B7077]"
                      : "text-gray-700"
                  }`}
                >
                  {ItemContent}
                </Link>
              ) : (
                <div
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-all"
                  onClick={() => console.log(label + " clicked")} // optional click action
                >
                  {ItemContent}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
