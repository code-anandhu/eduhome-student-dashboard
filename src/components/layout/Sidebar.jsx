import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../utils/sidebarMenu";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logos/Eduhome Logo.png";

function Sidebar({ sidebarOpen, setSidebarOpen }) {

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {

        localStorage.removeItem("isLoggedIn");
        window.location.href = "/login/"

    };

    const isItemActive = (path) => {
        if (path === "/dashboard")
            return location.pathname.startsWith("/dashboard");

        if (path === "/courses")
            return location.pathname.startsWith("/courses");

        if (path.startsWith("/subjects"))
            return location.pathname.startsWith("/subjects");

        if (path.startsWith("/chapters"))
            return location.pathname.startsWith("/chapters");

        if (path.startsWith("/videos"))
            return location.pathname.startsWith("/videos");

        if (path === "/profile")
            return location.pathname.startsWith("/profile");

        return false;
    };

    return (

        <>
            {/* Mobile Overlay */}
            {
                sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )
            }

            <aside
                className={`
                fixed lg:static
                top-0 left-0
                h-screen
                w-64
                bg-slate-900
                text-white
                flex flex-col
                z-50
                transform transition-transform duration-300
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                lg:translate-x-0
            `}
            >

                {/* Logo */}

                <div className="h-20 flex items-center justify-center border-b border-slate-700">

                    <img
                        src={logo}
                        alt="EduHome Logo"
                        className="w-36 object-contain"
                    />

                </div>

                {/* Navigation */}

                <nav className="mt-6 flex-1">

                    {sidebarMenu.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={`
                                   flex items-center gap-3 px-6 py-3 transition
                                    ${isItemActive(item.path)
                                        ? "bg-blue-600"
                                        : "hover:bg-slate-800"
                                    }
                                 `}
                            >

                                <Icon size={18} />

                                <span>{item.title}</span>

                            </NavLink>

                        );

                    })}

                </nav>

                {/* Logout */}

                <button
                    onClick={handleLogout}
                    className="m-4 bg-red-600 hover:bg-red-700 rounded-lg py-3"
                >

                    Logout

                </button>

            </aside>

        </>

    );

}


export default Sidebar;