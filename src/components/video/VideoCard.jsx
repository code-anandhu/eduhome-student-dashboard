import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

function VideoCard({ video }) {
  return (
    <Link
      to={`/videoplayers/${video.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >

      {/* Thumbnail */}

      <div className="relative h-48 sm:h-52 bg-slate-200">

        <img
          src="https://placehold.co/600x400"
          alt={video.title}
          className="w-full h-full object-cover"
        />

        {/* Play Button */}

        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">

          <FaPlayCircle
            className="text-white text-5xl md:text-6xl opacity-90 group-hover:scale-110 transition"
          />

        </div>

        {/* Duration */}

        <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">

          {video.duration}

        </span>

      </div>

      {/* Content */}

      <div className="p-4 sm:p-5">

        <h2 className="text-lg md:text-xl font-bold text-slate-800 line-clamp-2">

          {video.title}

        </h2>

        <p className="text-sm text-gray-500 mt-2">

          React Development

        </p>

        {/* Progress */}

        <div className="mt-5">

          <div className="flex justify-between text-sm mb-2">

            <span className="text-gray-500">

              Progress

            </span>

            <span className="font-semibold text-blue-600">

              40%

            </span>

          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full">

            <div className="w-[40%] h-2 bg-blue-600 rounded-full transition-all duration-500"></div>

          </div>

        </div>

      </div>

    </Link>
  );
}

export default VideoCard;