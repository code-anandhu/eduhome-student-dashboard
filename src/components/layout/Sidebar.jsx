import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../utils/sidebarMenu";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/Eduhome Logo.png";

function Sidebar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("isLoggedIn");

        navigate("/login");

    };

    return (
        <aside className="w-64 bg-slate-900 text-white flex flex-col">

            {/* Logo */}
            <div className="h-16 flex items-center justify-center border-b border-slate-700">

                <img
                    src={logo}
                    alt="EduHome Logo"
                    className="w-30 h-30 object-contain"
                />
            </div>

            {/* Navigation */}
            <nav className="mt-6 flex-1">

                {sidebarMenu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink className={({ isActive }) =>
                            `flex items-center gap-3 px-6 py-3 transition-all ${isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-slate-800"
                            }`
                        }
                            key={item.path}
                            to={item.path}
                        >
                            <Icon />
                            <span>{item.title}</span>
                        </NavLink>
                    );
                })}

            </nav>

            {/* Footer */}
            <button
                onClick={handleLogout}
                className="m-4 bg-red-600 hover:bg-red-700 rounded-lg py-3 transition"
            >

                Logout

            </button>

        </aside>
    );
}

export default Sidebar;