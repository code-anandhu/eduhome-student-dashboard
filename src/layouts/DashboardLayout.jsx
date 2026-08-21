import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

function DashboardLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Disable right click + common developer shortcuts
  useEffect(() => {

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {

      // F12
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }

      // Ctrl + Shift + I / J / C
      if (
        e.ctrlKey &&
        e.shiftKey &&
        ["I", "J", "C"].includes(e.key.toUpperCase())
      ) {
        e.preventDefault();
        return;
      }

      // Ctrl + U
      if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        return;
      }
    };

    const handleCopy = (e) => {
      e.preventDefault();
    };

    const handleCut = (e) => {
      e.preventDefault();
    };

    const handleDragStart = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("dragstart", handleDragStart);
    };

  }, []);

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