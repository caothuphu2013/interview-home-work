const rand = () => {
  return Math.random().toString(36).substr(2);
};

export const generateToken = () => {
  return rand() + rand();
};