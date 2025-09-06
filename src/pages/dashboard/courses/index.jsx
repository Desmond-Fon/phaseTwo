import { useState, useEffect } from "react";
import { fetchCourses } from "../../../utils/api";
import { Link } from "react-router-dom"; // Make sure you're using React Router
import DashboardLayout from "../../../components/layout/DashboardLayout";

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function loadCourses() {
            const data = await fetchCourses();
            setCourses(data);
        }

        loadCourses();
    }, []);

    return (
        <DashboardLayout>
            <h2 className="text-3xl font-semibold mb-6">Available Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <Link to={`/dashboard/courses/${course.id}`}>
                            {/* Course Image */}
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-40 object-contain rounded-lg mb-4 transition-all duration-300 ease-in-out hover:opacity-90"
                            />

                            {/* Course Title */}
                            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 ease-in-out mb-2">
                                {course.title}
                            </h3>

                            {/* Course Description */}
                            <p className="text-sm text-gray-600 line-clamp-3">{course.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default CoursesPage;