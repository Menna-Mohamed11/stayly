import api from "./api";

export async function findAll(propertyId) {
  const response = await api.get(`/properties/${propertyId}/reviews`);
  return response.data;
}

export async function create(reviewData) {
  const response = await api.post("/reviews", reviewData);
  return response.data;
}

export async function update(id, reviewData) {
  const response = await api.patch(`/reviews/${id}`,reviewData);
  return response.data;
}

export async function deleteReview(id) {
  const response = await api.delete(`/reviews/${id}`);
  return response.data;
}