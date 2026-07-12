import { Link } from "react-router-dom";

function SubjectCard({ subject }) {
  return (

    <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300">

      {/* Subject Title */}

      <h2 className="text-lg md:text-xl font-semibold text-slate-800">

        {subject.title}

      </h2>

      {/* Chapters */}

      <p className="text-gray-500 text-sm md:text-base mt-3">

        Chapters : <span className="font-medium">{subject.chapters}</span>

      </p>

      {/* Button */}

      <Link
        to={`/chapters/${subject.id}`}
        className="block mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 md:py-3 rounded-xl transition"
      >

        Open Subject

      </Link>

    </div>

  );
}

export default SubjectCard;