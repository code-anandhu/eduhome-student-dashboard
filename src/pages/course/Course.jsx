import { useState , useEffect } from "react";
import CourseCard from "../../components/course/CourseCard";
import { getCourses } from "../../services/catalogService";
import PageLoader from "../../components/common/PageLoader";
import BackButton from "../../components/common/BackButton";



function Course() {

  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchCourses = async () => {
  try {
    const response = await getCourses();

    console.log("Courses Response:", response);

    setCourses(response.result);

  } catch (error) {
    console.error("Courses Error:", error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchCourses();
}, []);


const filteredCourses = courses.filter((item) =>
  item.course.title.toLowerCase().includes(search.toLowerCase())
);



if (loading) {
  return (
    <PageLoader text="Loading Courses..."/>
  );
}


  return (

    <div className="space-y-6">

      {/* Page Title */}

      <div>
       <BackButton/>
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