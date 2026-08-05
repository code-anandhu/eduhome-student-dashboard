import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getVideos,
  getVideoById,
  saveVideoProgress,
  getVideoProgress,
} from "../../services/videoService";

import VideoCard from "../../components/video/VideoCard";
import PageLoader from "../../components/common/PageLoader";
import BackButton from "../../components/common/BackButton";

function Videos() {
  const { chapterId, levelId } = useParams();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = async () => {
    try {
      const response = await getVideos(chapterId, levelId);

      console.log("Videos Response:", response);

      setVideos(response.result?.videos || []);
    } catch (error) {
      console.error(error);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [chapterId, levelId]);

  if (loading) {
    return <PageLoader text="Loading Videos..." />;
  }

  return (
    <div className="space-y-6">
      <div>
        <BackButton />

        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Videos
        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Select a video to start learning.
        </p>
      </div>

      {videos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}
        </div>
      ) : (
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