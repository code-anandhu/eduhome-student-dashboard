import api from "./api";

export const getVideos = async (chapterId) => {
  const response = await api.get(`/student/videos/chapter/${chapterId}`);
  return response.data;
};

// get a single video Id 

export const getVideoById = async (videoId) => {
  const response = await api.get(`/student/videos/${videoId}`);
  return response.data;
};



