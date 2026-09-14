import api from "./axios";

export const getProjectById = async (projectId) => {
  const response = await api.get(`/projects/${projectId}`);

  return response.data;
};


export const getProjects = async () => {
  const response = await api.get("/projects");

  return response.data;
};