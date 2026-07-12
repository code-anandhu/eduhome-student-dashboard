import { useParams } from "react-router-dom";
import videos from "../../data/videos";
import VideoCard from "../../components/video/VideoCard";

function Videos() {

  const { chapterId } = useParams();

  const filteredVideos = videos.filter(
    (video) => video.chapterId === Number(chapterId)
  );

  return (

    <div className="space-y-6">

      {/* Page Header */}

      <div>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">

          Videos

        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">

          Select a video to start learning.

        </p>

      </div>

      {/* Videos Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">

        {filteredVideos.map((video) => (

          <VideoCard
            key={video.id}
            video={video}
          />

        ))}

      </div>

      {/* Empty State */}

      {filteredVideos.length === 0 && (

        <div className="bg-white rounded-2xl border p-10 text-center">

          <h2 className="text-xl font-semibold">

            No Videos Available

          </h2>

          <p className="text-gray-500 mt-2">

            Videos will appear here once they are assigned.

          </p>

        </div>

      )}

    </div>

  );

}

export default Videos;