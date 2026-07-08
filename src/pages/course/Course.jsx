import React from 'react'
import { courses } from '../../data/courses'
import CourseCard from '../../components/course/CourseCard'
import { useState } from "react";


function Course() {

  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
  course.title.toLowerCase().includes(search.toLowerCase())
);

  return (
      <div>

    <h1 className="text-3xl font-bold mb-6">
      My Courses
    </h1>

    <div className="my-6">

  <input
    type="text"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    placeholder="Search courses..."
    className="w-full md:w-96 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

</div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {filteredCourses.map((course) => (

        <CourseCard
          key={course.id}
          course={course}
        />

      ))}

    </div>

  </div>
  )
}

export default Course