import { FaBell, FaBars } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import logo from "../../assets/logos/Eduhome Logo.png";

function Header({setSidebarOpen}) {

    const today = new Date();

    const date = today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const student = JSON.parse(localStorage.getItem("student"));

const name = student
  ? `${student.firstName} ${student.lastName}`
  : "Student";

const firstLetter = student?.firstName
  ? student.firstName.charAt(0).toUpperCase()
  : "S";

const hour = today.getHours();

let greeting = "";

if (hour < 12) {
  greeting = "Good Morning";
} else if (hour < 17) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

  return (

<header className="bg-white border-b px-4 md:px-8 h-20 flex items-center justify-between">

    {/* Left */}

    <div className="flex items-center gap-3">

        {/* Mobile Menu */}

        <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
        >
            <FaBars size={22} />
        </button>

        <img
            src={logo}
            alt="EduHome Logo"
            className="w-20 md:w-24 object-contain"
        />

        <div className="hidden sm:block">

            <h2 className="text-lg md:text-2xl font-bold text-slate-800">

                {greeting} 

            </h2>

            <p className="text-gray-500 text-sm">

                {date}

            </p>

        </div>

    </div>

    {/* Right */}

    <div className="flex items-center gap-2 md:gap-4">

        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">

            <MdOutlineLightMode size={18} />

        </button>

        <button className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">

            <FaBell size={16} />

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        <div className="flex items-center gap-2">

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                {firstLetter}

            </div>

            <div className="hidden md:block">

                <h3 className="font-semibold">

                    {name}

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