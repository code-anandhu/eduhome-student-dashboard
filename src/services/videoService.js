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

// video progress 

export const saveVideoProgress = async (data) => {
  const response = await api.post("/student/video-progress", data);
  return response.data;
};

// video-progress id

export const getVideoProgress = async (videoId) => {
  const response = await api.get(`/student/video-progress/${videoId}`);
  return response.data;
};



