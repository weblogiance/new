import React from "react";
import {Outlet} from "react-router"
const Sidebar = () => {
    const navItems = [
        { name: "Navbars", href: "#" },
        { name: "Buttons", href: "#" },
        { name: "Loader", href: "#" },
        { name: "Forms", href: "#" },
        { name: "carts", href: "#" },
        { name: "Footers", href: "#" },
        { name: "Timeline", href: "#" },
        { name: "Design Text Color", href: "#" },
        { name: "Reviwe Page", href: "#" },
        { name: "Page Not Found - 404", href: "#" },
        { name: "Internship Creticate", href: "#" },
        { name: "Project", href: "#" },
        { name: "Backend Node JS code", href: "#" },
    ];

    return (
        <div className="flex">
            <div className="flex flex-col h-screen bg-gray-800 text-white w-64 md:w-72">
                <div className="p-4 text-lg font-bold border-b border-gray-700">
                    Sidebar
                </div>
                <nav className="flex-1 p-4">
                    <ul className="space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => alert(`Navigating to ${item.name}`)}
                                    className="block w-full text-left p-2 rounded hover:bg-gray-700 transition"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="w-full">
                  <Outlet/>
            </div>
        </div>
    );
};

export default Sidebar;
