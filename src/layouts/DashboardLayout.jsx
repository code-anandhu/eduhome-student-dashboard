import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

function DashboardLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <div className="flex h-screen bg-gray-100">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex flex-col flex-1">

        <Header
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">

          <Outlet />

        </main>

      </div>

    </div>

  );

}

export default DashboardLayout;