import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../SideBar";
import TopBar from "../TopBar";

const DashboardLayout = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const token = sessionStorage.getItem("token") || localStorage.getItem("token");

        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            navigate("/login");
        }
    }, [navigate]);

    if (!isAuthenticated) {
        return <div>Redirecting...</div>;
    }

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div className={`lg:w-[15%] w-full bg-blue-700 text-white p-4 lg:flex flex-col items-start ${isSidebarOpen ? "block" : "hidden"} lg:block`}>
                <Sidebar />
            </div>

            {/* Main content */}
            <div className="flex flex-col w-full lg:w-[85%] mt-4">
                <div className="px-4">
                    <TopBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;