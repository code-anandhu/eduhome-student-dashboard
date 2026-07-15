import { Link } from "react-router-dom";
import { FaLayerGroup } from "react-icons/fa";

function LevelCard({ level }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition duration-300">

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
        <FaLayerGroup className="text-blue-600 text-2xl" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-slate-800">
        {level.title}
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2">
        {level.description}
      </p>

      {/* Videos */}
      <p className="mt-4 text-gray-600">
        Videos : <span className="font-semibold">{level.totalVideos}</span>
      </p>

      {/* Button */}
      <Link
        to={`/videos/${level.id}`}
        className="block mt-6 bg-blue-600 text-white text-center py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Open Level
      </Link>

    </div>
  );
}

export default LevelCard;