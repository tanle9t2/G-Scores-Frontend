
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiCalendar, FiUser, FiBarChart2, FiSettings } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const navItems = [
    { name: "Dashboard", path: "/", icon: <FiHome /> },
    { name: "Search", path: "/search", icon: <FaSearch /> },
    { name: "Top 10", path: "/top", icon: <FiUser /> },
];

const AppSidebar = () => {
    const location = useLocation();

    return (
        <div
            className={`h-screen transition-all duration-300"
                }`}
        >
            <nav className="">
                <ul className="space-y-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition ${location.pathname === item.path ? "bg-gray-200 dark:bg-gray-700 font-semibold" : ""
                                    }`}
                            >
                                <span>{item.icon}</span>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default AppSidebar;
