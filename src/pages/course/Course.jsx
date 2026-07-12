import { useState } from "react";
import { courses } from "../../data/courses";
import CourseCard from "../../components/course/CourseCard";

function Course() {

  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="space-y-6">

      {/* Page Title */}

      <div>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">

          My Courses

        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">

          Browse and continue your enrolled courses.

        </p>

      </div>

      {/* Search */}

      <div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search courses..."
          className="w-full md:w-96 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Courses */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">

        {filteredCourses.map((course) => (

          <CourseCard
            key={course.id}
            course={course}
          />

        ))}

      </div>

      {/* Empty State */}

      {filteredCourses.length === 0 && (

        <div className="bg-white rounded-xl border p-10 text-center">

          <h2 className="text-xl font-semibold">

            No Courses Found

          </h2>

          <p className="text-gray-500 mt-2">

            Try searching with another keyword.

          </p>

        </div>

      )}

    </div>

  );

}

export default Course;