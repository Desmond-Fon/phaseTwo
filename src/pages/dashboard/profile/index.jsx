import { useState, useEffect } from "react";
import { fetchUserProfile } from "../../../utils/api";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function loadUserProfile() {
            const data = await fetchUserProfile();
            setUser(data);
        }

        loadUserProfile();
    }, []);

    return (
        <DashboardLayout>
            <h2 className="text-3xl font-semibold mb-6">Profile</h2>
            {user && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </DashboardLayout>
    );
};

export default ProfilePage;