import api from "./axios";

// Get all services
export const getServices = async () => {
  const response = await api.get("/api/v1/services");

  return response.data;
};

// Get one service
export const getService = async (serviceId) => {
  const response = await api.get(`/services/${serviceId}`);

  return response.data;
};

// Create service
export const createService = async (serviceData) => {
  const response = await api.post(
    "/services",
    serviceData
  );

  return response.data;
};

// Update service
export const updateService = async (
  serviceId,
  serviceData
) => {
  const response = await api.put(
    `/services/${serviceId}`,
    serviceData
  );

  return response.data;
};

// Delete service
export const deleteService = async (serviceId) => {
  const response = await api.delete(
    `/services/${serviceId}`
  );

  return response.data;
};