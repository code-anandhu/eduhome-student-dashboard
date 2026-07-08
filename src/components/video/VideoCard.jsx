import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link
      to={`/videoplayers/${video.id}`}
      className="block"
    >
      <div className="bg-white border rounded-xl shadow-sm p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">

        <h2 className="text-xl font-semibold">
          {video.title}
        </h2>

        <p className="text-gray-500 mt-2">
          Duration : {video.duration}
        </p>

        <p className="mt-5 text-blue-600 font-medium">
          Click to Watch →
        </p>

      </div>
    </Link>
  );
}

export default VideoCard;