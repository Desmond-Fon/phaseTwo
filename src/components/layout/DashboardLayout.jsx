import Sidebar from "../SideBar";
import TopBar from "../TopBar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 p-4">
                <TopBar />

                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;