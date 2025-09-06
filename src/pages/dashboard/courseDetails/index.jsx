import { useState, useEffect } from "react";
import { getCourseDetails } from "../../../utils/api"; // Make sure the `getCourseDetails` function is correctly defined
import { useParams } from "react-router-dom"; // Make sure you're using React Router
import DashboardLayout from "../../../components/layout/DashboardLayout";

const CourseDetailsPage = () => {
    const { courseId } = useParams(); // Getting the course ID from the URL
    const [courseDetails, setCourseDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCourseDetails() {
            setLoading(true);
            try {
                const data = await getCourseDetails(courseId);
                setCourseDetails(data);
            } catch (error) {
                console.error("Error fetching course details", error);
            } finally {
                setLoading(false);
            }
        }

        loadCourseDetails();
    }, [courseId]);

    if (loading) {
        return <DashboardLayout>
            <div>Loading...</div>
        </DashboardLayout>;
    }

    if (!courseDetails) {
        return <DashboardLayout>
            <div>Course not found</div>
        </DashboardLayout>;
    }

    return (
        <DashboardLayout>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                    src={courseDetails.image}
                    alt={courseDetails.title}
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-3xl font-semibold mb-4">{courseDetails.title}</h2>
                <p className="mb-4">{courseDetails.description}</p>

                {/* Add more details like course content, duration, pricing, etc. */}
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="font-semibold">Duration:</span>
                        <span>{courseDetails.duration}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Price:</span>
                        <span>{courseDetails.price}</span>
                    </div>
                    {/* Add more fields if necessary */}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CourseDetailsPage;