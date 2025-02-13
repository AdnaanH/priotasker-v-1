import { NavLink } from "react-router-dom";
import { Home, ListChecks, Tag, CalendarDays, Search, Pin, User, LogOut, Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/" },
    { name: "Tasks", icon: <ListChecks size={20} />, path: "/tasks" },
    { name: "Categories", icon: <Tag size={20} />, path: "/categories" },
    { name: "Calendar", icon: <CalendarDays size={20} />, path: "/calendar" },
    { name: "Pinned", icon: <Pin size={20} />, path: "/pinned" },
    { name: "Search", icon: <Search size={20} />, path: "/search" },
    { name: "Profile", icon: <User size={20} />, path: "/profile" }, // 🔄 Changed from Settings to Profile
  ];

  return (
    <aside className={`h-screen flex flex-col justify-between bg-gray-200 dark:bg-gray-900 text-black dark:text-white p-4 transition-all ${isOpen ? "w-64" : "w-20"}`}>
      
      <div>
        {/* Sidebar Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg mb-4 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600">
          <Menu size={20} />
        </button>

        {/* Menu Items */}
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-blue-500 text-white" : "hover:bg-gray-300 dark:hover:bg-gray-700"
                    }`
                  }
                >
                  {item.icon}
                  {isOpen && <span>{item.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <button className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-red-500 dark:hover:bg-red-700 text-red-600 dark:text-red-400">
        <LogOut size={20} />
        {isOpen && <span>Logout</span>}
      </button>
      
    </aside>
  );
};

export default Sidebar;
