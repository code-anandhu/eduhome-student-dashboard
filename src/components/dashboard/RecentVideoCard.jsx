import { useNavigate } from "react-router-dom";


function RecentVideoCard({
  title,
  duration,
  thumbnail,
  progress,
  course,
  chapter,
}) {
  const navigate = useNavigate();

  const thumbnailUrl = (() => {
    if (!thumbnail) return "https://placehold.co/600x400";

    try {
      return JSON.parse(thumbnail)[0];
    } catch {
      return thumbnail;
    }
  })();

  const handleWatchNow = () => {
    navigate(`/videoplayers/${id}`);
  };

  return (

    <div className="bg-white border rounded-2xl shadow-sm p-4 sm:p-5 hover:shadow-lg transition-all duration-300">

      {/* Thumbnail */}

      <img
        src={thumbnailUrl}
        alt={title}
        className="h-40 md:h-44 w-full object-cover rounded-xl"
      />

      {/* Video Details */}

      <h3 className="mt-4 text-lg md:text-xl font-semibold text-slate-800 line-clamp-2">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {course?.title}
      </p>

      <p className="text-sm text-gray-500">
        {chapter?.title}
      </p>

      <div className="mt-4">

        <div className="flex justify-between text-sm mb-2">

          <span>Progress</span>

          <span className="font-semibold text-blue-600">
            {progress?.progressPercent ?? 0}%
          </span>

        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full">

          <div
            className="h-2 bg-blue-600 rounded-full transition-all"
            style={{
              width: `${progress?.progressPercent ?? 0}%`,
            }}
          />

        </div>

      </div>

      <p className="text-gray-500 text-sm mt-4">
        Duration : {duration || "--:--"}
      </p>

      <button
        onClick={()=> navigate(`/videoplayers/${id}`)}
        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg transition"
      >
        Watch Now
      </button>

    </div>

  );
}

export default RecentVideoCard;