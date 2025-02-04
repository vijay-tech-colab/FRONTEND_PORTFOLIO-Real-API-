import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiBriefcase, FiFileText, FiUser, FiSettings, FiMenu, FiX } from "react-icons/fi";

export default function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-blue-900 text-white w-64 p-5 space-y-6 fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button 
            className="text-white text-2xl md:hidden" 
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>
        <nav>
          <ul className="space-y-4">
            {[
              { icon: <FiHome />, label: "Dashboard", to: "/" },
              { icon: <FiBriefcase />, label: "Projects", to: "/projects" },
              { icon: <FiFileText />, label: "Portfolio", to: "/portfolio" },
              { icon: <FiUser />, label: "Clients", to: "/clients" },
              { icon: <FiSettings />, label: "Settings", to: "/settings" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded cursor-pointer"
                >
                  {item.icon} <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64 overflow-hidden">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex bg-red-600 justify-between items-center fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] z-40">
          <button
            className="text-xl md:hidden"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </button>
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
        </header>

        {/* Content */}
        <main className="p-6 flex-1 overflow-y-auto mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">
              Welcome to the Portfolio Management Dashboard
            </h3>
            <p className="text-gray-600">
              Manage your projects, portfolios, and clients efficiently.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
