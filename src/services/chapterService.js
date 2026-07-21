import api from "./api";

export const getChapters = async (subjectId) => {
  const response = await api.get(`/student/chapters/${subjectId}`);
  return response.data;
};
