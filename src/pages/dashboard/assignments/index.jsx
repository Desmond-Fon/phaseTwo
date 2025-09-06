import { useState, useEffect } from "react";
import { fetchAssignments } from "../../../utils/api";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const AssignmentsPage = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        async function loadAssignments() {
            const data = await fetchAssignments();
            setAssignments(data);
        }

        loadAssignments();
    }, []);

    return (
        <DashboardLayout>
            <h2 className="text-3xl font-semibold mb-6">Assignments</h2>
            <ul>
                {assignments.map((assignment) => (
                    <li key={assignment.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
                        <h3 className="font-semibold">{assignment.title}</h3>
                        <p>Status: {assignment.completed ? "Completed" : "Pending"}</p>
                    </li>
                ))}
            </ul>
        </DashboardLayout>
    );
};

export default AssignmentsPage;