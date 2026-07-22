function CourseCard({
  title,
  description,
  duration,
  status,
  admissionDate,
}) {
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
          <span className="text-green-600 capitalize">
            {status}
          </span>
        </p>

        <p>
          <span className="font-semibold">Admission:</span>{" "}
          {admissionDate
            ? new Date(admissionDate).toLocaleDateString()
            : "--"}
        </p>

      </div>

      <button
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
      >
        Continue Learning
      </button>

    </div>
  );
}

export default CourseCard;