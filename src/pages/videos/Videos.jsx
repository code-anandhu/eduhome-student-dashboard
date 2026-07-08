import { useParams } from "react-router-dom";
import videos from "../../data/videos";
import VideoCard from "../../components/video/VideoCard";

function Videos() {

  const { chapterId } = useParams();

  const filteredVideos = videos.filter(
    (video) => video.chapterId === Number(chapterId)
  );

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Videos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
          />
        ))}

      </div>

    </div>
  );
}

export default Videos;