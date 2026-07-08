import { Link } from "react-router-dom";

function SubjectCard({ subject }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">

      <h2 className="text-xl font-semibold">
        {subject.title}
      </h2>

      <p className="text-gray-500 mt-2">
        Chapters : {subject.chapters}
      </p>

      <Link
        to={`/chapters/${subject.id}`}
        className="block mt-5 bg-blue-600 text-white text-center py-2 rounded-lg"
      >
        Open Subject
      </Link>

    </div>
  );
}

export default SubjectCard;