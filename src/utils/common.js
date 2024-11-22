export const isEmptyObject = (obj) => {
  if (typeof obj !== "object" || Array.isArray(obj)) return false;
  return !!Object.keys(obj).length;
};
