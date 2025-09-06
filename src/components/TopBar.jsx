const TopBar = () => {
    return (
        <div className="flex justify-between items-center bg-blue-800 text-white p-4 rounded-lg">
            <div className="text-xl font-semibold">Welcome, User</div>
            <div className="flex items-center gap-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Logout</button>
            </div>
        </div>
    );
};

export default TopBar;