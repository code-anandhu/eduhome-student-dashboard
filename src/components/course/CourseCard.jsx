import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-xl transition-all duration-300">

      {/* Course Image */}

      <img
        src={course.image}
        alt={course.title}
        className="w-full h-44 sm:h-48 object-cover"
      />

      {/* Content */}

      <div className="p-4 sm:p-5 md:p-6">

        <h2 className="text-lg md:text-xl font-bold text-slate-800 line-clamp-2">

          {course.title}

        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-2">

          Instructor : {course.instructor}

        </p>

        <p className="text-gray-500 text-sm md:text-base mt-2">

          Subjects : {course.subjects}

        </p>

        {/* Progress */}

        <div className="mt-5">

          <div className="flex justify-between text-sm mb-2">

            <span>Progress</span>

            <span>{course.progress}%</span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">

            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${course.progress}%`,
              }}
            />

          </div>

        </div>

        <Link
          to={`/subjects/${course.id}`}
          className="block mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 md:py-3 rounded-xl transition"
        >

          Open Course

        </Link>

      </div>

    </div>
  );
}

export default CourseCard;