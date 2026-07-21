import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition">

      {/* Dummy Image */}

  <img
  src={
    course.course.image ||
    "https://placehold.co/600x300?text=Course"
  }
  alt={course.course.title}
  className="w-full rounded-2xl"
/>

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {course.course.title}
        </h2>

        <p className="text-gray-500 mt-2">
          {course.course.description || "No Description"}
        </p>

        <div className="mt-4 space-y-2 text-sm">

          <p>
            <span className="font-semibold">Duration :</span>{" "}
            {course.course.duration}
          </p>

          <p>
            <span className="font-semibold">Batch :</span>{" "}
            {course.batchName}
          </p>

          <p>
            <span className="font-semibold">Status :</span>{" "}
            <span
              className={`font-semibold ${
                course.status === "active"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {course.status}
            </span>
          </p>

          <p>
            <span className="font-semibold">Admission :</span>{" "}
            {new Date(course.admissionDate).toLocaleDateString()}
          </p>

        </div>

        <Link
          to={`/subjects/${course.course.id}`}
          className="block mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl"
        >
          Open Course
        </Link>

      </div>

    </div>
  );
}

export default CourseCard;