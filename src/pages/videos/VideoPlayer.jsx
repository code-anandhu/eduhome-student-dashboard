import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  getVideoById,
  saveVideoProgress,
  getVideoProgress
} from "../../services/videoService";
import PageLoader from "../../components/common/PageLoader";
import BackButton from "../../components/common/BackButton";



function VideoPlayer() {
  const { videoId } = useParams();

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const videoRef = useRef(null);
  const [securityBlocked, setSecurityBlocked] = useState(false);

  const student = JSON.parse(localStorage.getItem("student") || "{}")

  // ---------------- Fetch Video ----------------

  useEffect(() => {
    const fetchVideo = async () => {
      setLoading(true)
      setError("")
      try {
        const response = await getVideoById(videoId);

        console.log("Video Response:", response);

        setVideo(response.result);

      } catch (error) {

        console.error(error);

        if (error.response?.status === 403) {
          setError(
            error.response.data?.message ||
            "You don't have access to this video."
          );
        }

      } finally {

        setLoading(false);

      }
    };

    fetchVideo();
  }, [videoId]);

  // ---------------- Common Values ----------------

  const videoUrl = video?.streamUrl || "";

  const isYoutube =
    videoUrl.includes("youtube.com") ||
    videoUrl.includes("youtu.be");

  // ---------------- Youtube Embed ----------------

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return "";

    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }

    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  };

  //--------------------- resume function ------------------

  const loadVideoProgress = async () => {
    try {
      const response = await getVideoProgress(videoId);

      console.log("Video Progress:", response);

      const position =
        response.result?.positionSeconds || 0;

      if (videoRef.current && position > 0) {
        videoRef.current.currentTime = position;
      }

    } catch (error) {
      console.error(error);
    }
  };

  // ---------------- Save Progress ----------------

  const handleSaveProgress = async () => {
    if (!videoRef.current || !video) return;

    const current = videoRef.current.currentTime || 0;
    const duration = videoRef.current.duration || 0;

    const progress =
      duration > 0
        ? Math.round((current / duration) * 100)
        : 0;

    try {
      await saveVideoProgress({
        videoId: video.id,
        positionSeconds: Math.floor(current),
        durationSeconds: Math.floor(duration),
        progressPercent: progress,
        isCompleted: progress >= 100,
      });



      console.log("Progress Saved");
    } catch (error) {
      console.error("Progress Save Error:", error);
    }
  };

  // ---------------- Video Security ----------------

  useEffect(() => {

    const freezeVideo = (reason) => {
      const video = videoRef.current;

      if (!video) return;

      video.pause();

      console.log(`Video stopped: ${reason}`);

      setSecurityBlocked(true);
    };

    // Keyboard press
    const handleKeyDown = (e) => {

      freezeVideo(`Key pressed: ${e.key}`);

      e.preventDefault();
      e.stopPropagation();
    };

    // Tab switch / minimize
    const handleVisibility = () => {

      if (document.hidden) {
        freezeVideo("Page hidden");
      }

    };

    // Browser/window loses focus
    const handleBlur = () => {

      freezeVideo("Window lost focus");

    };

    // Fullscreen exit
    const handleFullscreen = () => {

      if (!document.fullscreenElement) {
        freezeVideo("Exited fullscreen");
      }

    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
      true
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    window.addEventListener(
      "blur",
      handleBlur
    );

    document.addEventListener(
      "fullscreenchange",
      handleFullscreen
    );

    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyDown,
        true
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

      window.removeEventListener(
        "blur",
        handleBlur
      );

      document.removeEventListener(
        "fullscreenchange",
        handleFullscreen
      );

    };

  }, []);


  // ---------------- Auto Save ----------------

  useEffect(() => {
    console.log("isYoutube =", isYoutube);

    if (!video || isYoutube) return;

    console.log("Auto Save Started");

    const interval = setInterval(() => {
      handleSaveProgress();
    }, 10000);

    return () => clearInterval(interval);
  }, [video, isYoutube]);

  // ---------------- Loading ----------------

  if (loading) {
    return (
      <PageLoader text="Loading video..." />
    );
  }

  if (error) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-bold text-red-600">
          {error}
        </h2>
      </div>
    );
  }

  // ---------------- No Video ----------------

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

      {/* Header */}

      <div>
        <BackButton />
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Video Player
        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Watch your lesson and continue learning.
        </p>
      </div>

      {/* Video */}

      <div className="flex justify-center">

        <div className="relative w-full max-w-5xl">
          {securityBlocked && (
            <div className="absolute inset-0 z-50 flex items-center justify-center rounded-2xl bg-black/90">
              <div className="text-center text-white px-6">
                <h2 className="text-xl md:text-2xl font-bold">
                  Video Playback Stopped
                </h2>

                <p className="mt-2 text-sm md:text-base text-gray-300">
                  Video stopped due to security policy.
                </p>
              </div>
            </div>
          )}

          {isYoutube ? (

            <iframe
              src={getYoutubeEmbedUrl(videoUrl)}
              title={video.title}
              className="w-full aspect-video rounded-2xl shadow-xl"
              allowFullScreen
            />

          ) : (

            <video
              ref={videoRef}
              src={videoUrl}
              controls
              controlsList="nodownload"
              disablePictureInPicture
              playsInline
              onContextMenu={(e) => e.preventDefault()}
              onLoadedMetadata={loadVideoProgress}
              onPause={handleSaveProgress}
              onEnded={handleSaveProgress}
              className="w-full aspect-video rounded-2xl shadow-xl bg-black"
            >
              Your browser does not support the video tag.
            </video>

          )}

          {/* Watermark */}

          <div className="pointer-events-none absolute top-4 right-4 z-10 select-none text-white/70 text-xs sm:text-sm font-medium bg-black/30 px-3 py-2 rounded-lg">
            {student.name || student.fullName || "EduHome Student"}
          </div>

        </div>

      </div>

      {/* Details */}

      <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-6">

        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
          {video.title}
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Duration : {video.duration || "--"}
        </p>

      </div>

    </div>
  );
}

export default VideoPlayer;