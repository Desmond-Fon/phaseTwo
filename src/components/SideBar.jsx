import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-blue-700 text-white h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <ul className="space-y-6">
        <li>
          <Link to="/dashboard" className="text-lg hover:text-blue-300">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/courses" className="text-lg hover:text-blue-300">Courses</Link>
        </li>
        <li>
          <Link to="/dashboard/assignments" className="text-lg hover:text-blue-300">Assignments</Link>
        </li>
        <li>
          <Link to="/dashboard/profile" className="text-lg hover:text-blue-300">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;