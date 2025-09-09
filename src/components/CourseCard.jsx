const CourseCard = ({ title, description, price }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-bold">{price}</p>
        <Button variant="outline">Enroll Now</Button>
      </div>
    </div>
  );
};

export default CourseCard;
