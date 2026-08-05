import api from "./api";

export const getLevels = async (chapterId) => {
  const response = await api.get(`/student/levels/${chapterId}`);
  return response.data;
};