import { useState, useEffect } from "react";
import { fetchUserProfile } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing icons

const TopBar = ({ toggleSidebar }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadUserProfile() {
            const data = await fetchUserProfile();
            setUser(data);
        }

        loadUserProfile();
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="flex justify-between items-center bg-blue-800 text-white p-4 rounded-lg">
            <div className="lg:hidden" onClick={toggleSidebar}>
                <Menu className="w-6 h-6 text-white cursor-pointer" />
            </div>

            <div className="text-xl font-semibold">
                Welcome, {user?.name?.title} {user?.name?.first}
            </div>

            <div className="flex items-center gap-4">
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default TopBar;