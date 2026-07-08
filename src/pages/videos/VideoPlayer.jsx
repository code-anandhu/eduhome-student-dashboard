import { useParams } from "react-router-dom";
import videos from "../../data/videos"


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

        <div>

            <h1 className="text-3xl font-bold mb-6">
                Video Player
            </h1>

           <div className="flex justify-center">

    <video
        src={video.file}
        controls
        className=" max-w-4xl  max-auto rounded-2xl shadow-xl bg-black"
    >
        Your browser does not support the video tag.
    </video>

</div>

          <div className="max-w-5xl mx-auto mt-6 bg-white rounded-xl shadow-sm border p-6">

    <h2 className="text-2xl font-bold">
        {video.title}
    </h2>

    <p className="text-gray-500 mt-2">
        Duration : {video.duration}
    </p>

</div>
        </div>

    );
}

export default VideoPlayer;