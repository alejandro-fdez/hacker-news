export const isDevEnv = () => {
  return process.env.NODE_ENV === 'development';
};

export const isTestEnv = () => {
  return process.env.NODE_ENV === 'test';
};

export const isProdEnv = () => {
  return process.env.NODE_ENV === 'production';
};
