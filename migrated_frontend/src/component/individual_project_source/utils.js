export const ease = [0.16, 1, 0.3, 1];

export function normalizeImages(data) {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.images)) return data.images;
  if (Array.isArray(data.image)) return data.image;
  if (data.image) return [data.image];
  return [];
}