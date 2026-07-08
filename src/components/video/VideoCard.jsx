import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-5">

      <h2 className="text-xl font-semibold">
        {video.title}
      </h2>

      <p className="text-gray-500 mt-2">
        Duration : {video.duration}
      </p>

      <Link
        to={`/videoplayers/${video.id}`}
        className="block mt-5 bg-blue-600 text-white text-center py-2 rounded-lg"
      >
        Play Video
      </Link>

    </div>
  );
}

export default VideoCard;