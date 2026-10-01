import api from "./api";

export async function getPropertyImages(propertyId) {
  const response = await api.get(`/properties/${propertyId}/images`);
  return response.data;
}

export async function create(propertyId,imageData) {
  const response = await api.post(
    `/properties/${propertyId}/images`,imageData
  );

  return response.data;
}

export async function remove(propertyId,imageId) {
  const response = await api.delete(
    `/properties/${propertyId}/images/${imageId}`
  );

  return response.data;
}