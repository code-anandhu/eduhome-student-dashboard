import { FaBell } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import logo from "../../assets/logos/Eduhome Logo.png";

function Header() {

    const today = new Date();

    const date = today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (

        <header className="bg-white border-b h-20 px-8 flex items-center justify-between">


            {/* Left */}



            <div className="flex items-center gap-4">

                <img
                    src={logo}
                    alt="EduHome Logo"
                    className="w-24 h-24 object-contain"
                />

                <div>

                    <h2 className="text-2xl font-bold text-slate-800">
                        Good Morning, Anandhu 👋
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">
                        {date}
                    </p>

                </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-4">

                <button className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">

                    <MdOutlineLightMode size={20} />

                </button>

                <button className="relative w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">

                    <FaBell size={18} />

                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

                </button>

                <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                        A

                    </div>

                    <div className="hidden md:block">

                        <h3 className="font-semibold">
                            Anandhu
                        </h3>

                        <p className="text-xs text-gray-500">
                            Student
                        </p>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Header;