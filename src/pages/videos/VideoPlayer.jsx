import { useParams } from "react-router-dom";
import videos from "../../data/videos";

function VideoPlayer() {

    const { videoId } = useParams();

    const video = videos.find(
        (item) => item.id === Number(videoId)
    );

    if (!video) {
        return (
            <div className="text-center mt-20">

                <h2 className="text-2xl font-bold">

                    Video Not Found

                </h2>

            </div>
        );
    }

    return (

        <div className="space-y-6">

            {/* Page Header */}

            <div>

                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">

                    Video Player

                </h1>

                <p className="text-gray-500 mt-2 text-sm md:text-base">

                    Watch your lesson and continue learning.

                </p>

            </div>

            {/* Video */}

            <div className="flex justify-center">

                <video
                    src={video.file}
                    controls
                    className="w-full max-w-5xl aspect-video rounded-2xl shadow-xl bg-black"
                >

                    Your browser does not support the video tag.

                </video>

            </div>

            {/* Video Details */}

            <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-6">

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">

                    {video.title}

                </h2>

                <p className="text-gray-500 mt-3 text-sm md:text-base">

                    Duration : {video.duration}

                </p>

            </div>

        </div>

    );
}

export default VideoPlayer;