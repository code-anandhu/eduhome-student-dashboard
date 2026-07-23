import { Link } from "react-router-dom";

function SubjectCard({ subject }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300">

      {/* Subject Title */}
      <h2 className="text-lg md:text-xl font-semibold text-slate-800">
        {subject.title}
      </h2>

      {/* Description */}
      {subject.description && (
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {subject.description}
        </p>
      )}

      {/* Stats */}
      <div className="mt-4 space-y-2 text-sm text-gray-600">

        <p>
          <span className="font-semibold">Chapters:</span>{" "}
          {subject.chaptersCount ?? 0}
        </p>

        <p>
          <span className="font-semibold">Videos:</span>{" "}
          {subject.totalVideos ?? 0}
        </p>

      </div>

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