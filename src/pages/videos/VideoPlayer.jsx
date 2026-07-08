import { useParams } from "react-router-dom";


function VideoPlayer() {

    const { videoId } = useParams();
    

    return (

        <div>

            <h1 className="text-3xl font-bold mb-6">
                Video Player
            </h1>

            <div className="bg-black rounded-xl aspect-video flex items-center justify-center text-white text-2xl">

                Video ID : {videoId}

            </div>

        </div>

    );
}

export default VideoPlayer;