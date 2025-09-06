import { useState, useEffect } from "react";
import { getCourseDetails } from "../../../utils/api"; // Make sure the `getCourseDetails` function is correctly defined
import { useParams } from "react-router-dom"; // Make sure you're using React Router
import DashboardLayout from "../../../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";

const CourseDetailsPage = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();

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

    console.log(courseDetails)

    return (
        <DashboardLayout>
            <div className="bg-gray-50 min-h-screen flex justify-center items-center py-10">
                <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg w-full">
                    <button
                        onClick={() => navigate(-1)} 
                        className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
                    >
                        ← Back to Courses
                    </button>
                    <img
                        src={courseDetails.image}
                        alt={courseDetails.title}
                        className="w-full h-60 object-contain rounded-lg mb-6"
                    />

                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">{courseDetails.title}</h2>

                    <p className="text-gray-700 mb-6">{courseDetails.description}</p>

                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-800">Category:</span>
                            <span>{courseDetails.category}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-800">Price:</span>
                            <span className="text-lg text-blue-600">${courseDetails.price}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-800">Rating:</span>
                            <div className="flex items-center">
                                <span className="mr-2">{courseDetails.rating.rate}</span>
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`${index < Math.round(courseDetails.rating.rate)
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                            } text-xl`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-800">Reviews:</span>
                            <span>{courseDetails.rating.count} reviews</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-800">Duration:</span>
                            <span>{courseDetails.duration || "N/A"}</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CourseDetailsPage;