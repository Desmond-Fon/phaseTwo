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
                        className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                    >
                        <Link to={`/courses/${course.id}`}>
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-40 object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-lg font-semibold">{course.title}</h3>
                            <p>{course.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default CoursesPage;