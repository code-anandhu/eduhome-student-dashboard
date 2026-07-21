import api from "./api";

export const getSubjects = async (courseId) => {
  const response = await api.get(`/student/subjects/${courseId}`);
  return response.data;
};