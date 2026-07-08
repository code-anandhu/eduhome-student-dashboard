import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

function DashboardLayout() {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Header />

        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Outlet/>
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;