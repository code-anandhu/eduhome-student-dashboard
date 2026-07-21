import api from "./api";

export const getCourses = async () => {
  const response = await api.get("/student/courses");
  return response.data;
};

export const getSubjects = async (courseId) => {
  const response = await api.get(`/student/subjects/${courseId}`);
  return response.data;
};

