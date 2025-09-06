import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../SideBar";
import TopBar from "../TopBar";

const DashboardLayout = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = useNavigate()
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

    console.log(isAuthenticated)

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="h-screen w-[15%] overflow-hidden">
                <Sidebar />
            </div>

            <div className="flex flex-col w-[85%] mt-4">
                <div className="px-4">
                    <TopBar />
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;