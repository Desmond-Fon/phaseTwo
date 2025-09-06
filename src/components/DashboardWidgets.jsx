import { useState, useEffect } from "react";
import { fetchCourses, fetchAssignments, fetchUserProfile } from "../utils/api";
const DashboardWidgets = () => {
    const [coursesCount, setCoursesCount] = useState(0);
    const [assignmentsCount, setAssignmentsCount] = useState({ completed: 0, pending: 0 });
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        // Fetching courses count
        async function loadCourses() {
            const courses = await fetchCourses();
            setCoursesCount(courses.length);
        }

        // Fetching assignments status
        async function loadAssignments() {
            const assignments = await fetchAssignments();
            const completed = assignments.filter((assignment) => assignment.completed).length;
            const pending = assignments.length - completed;
            setAssignmentsCount({ completed, pending });
        }

        // Fetching user profile
        async function loadUserProfile() {
            const profile = await fetchUserProfile();
            setUserProfile(profile);
        }

        loadCourses();
        loadAssignments();
        loadUserProfile();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-500 text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold">Enrolled Courses</h3>
                <p>{coursesCount}</p>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold">Assignments</h3>
                <p>Completed: {assignmentsCount.completed}</p>
                <p>Pending: {assignmentsCount.pending}</p>
            </div>
            <div className="bg-yellow-500 text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold">User Profile</h3>
                {userProfile ? (
                    <div>
                        <p>Name: {userProfile.name.first} {userProfile.name.last}</p>
                        <p>Email: {userProfile.email}</p>
                    </div>
                ) : (
                    <p>Loading profile...</p>
                )}
            </div>
        </div>
    );
};

export default DashboardWidgets;