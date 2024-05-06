export const getEnv = (key, defaultVal = null) => {
  return import.meta.env[key] || defaultVal;
};
