import { useNavigate } from "react-router-dom";


function CourseCard({
   courseId,
    title,
    description,
    duration,
    status,
    admissionDate,
}) {

  const navigate = useNavigate();


  return (
    <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300">

      <h2 className="text-lg md:text-2xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="text-gray-500 mt-2 text-sm">
        {description || "No description available"}
      </p>

      <div className="mt-4 space-y-2 text-sm text-gray-600">

        <p>
          <span className="font-semibold">Duration:</span>{" "}
          {duration ? `${duration} Months` : "--"}
        </p>

        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={`capitalize font-medium ${status === "active"
                ? "text-green-600"
                : "text-red-500"
              }`}
          >
            {status}
          </span>
        </p>

        <p>
          <span className="font-semibold">Admission:</span>{" "}
          {admissionDate
            ? new Date(admissionDate).toLocaleDateString("en-IN")
            : "--"}
        </p>

      </div>

      <button  onClick={() => navigate(`/subjects/${courseId}`)}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
      >
        Continue Learning
      </button>

    </div>
  );
}

export default CourseCard;