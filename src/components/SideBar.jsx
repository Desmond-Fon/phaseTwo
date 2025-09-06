import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-blue-700 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <ul>
        <li className="mb-6">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/courses">Courses</Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/assignments">Assignments</Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;