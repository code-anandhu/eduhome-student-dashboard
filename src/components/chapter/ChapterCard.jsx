import { Link } from "react-router-dom";

function ChapterCard({ chapter }) {

  return (

    <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300">

      {/* Chapter Title */}

      <h2 className="text-lg md:text-xl font-semibold text-slate-800">

        {chapter.title}

      </h2>

      {/* Videos Count */}

      <p className="text-gray-500 text-sm md:text-base mt-3">

        Videos : <span className="font-medium">{chapter.videos}</span>

      </p>

      {/* Button */}

      <Link
        to={`/levels/${chapter.id}`}
        className="block mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 md:py-3 rounded-xl transition"
      >

        Open Chapter

      </Link>

    </div>

  );

}

export default ChapterCard;