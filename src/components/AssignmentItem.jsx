// components/AssignmentItem.js
const AssignmentItem = ({ title, dueDate, status }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">Due Date: {dueDate}</p>
      <p
        className={`text-sm mt-2 ${
          status === "Completed" ? "text-green-600" : "text-red-600"
        }`}
      >
        {status}
      </p>
    </div>
  );
};

export default AssignmentItem;
