import { Link } from "react-router-dom";

function ChapterCard({ chapter }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">

      <h2 className="text-xl font-semibold">
        {chapter.title}
      </h2>

      <p className="text-gray-500 mt-2">
        Videos : {chapter.videos}
      </p>

      <Link
        to={`/videos/${chapter.id}`}
        className="block mt-5 bg-blue-600 text-white text-center py-2 rounded-lg"
      >
        Open Chapter
      </Link>

    </div>
  );
}

export default ChapterCard;