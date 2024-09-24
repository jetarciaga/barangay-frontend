export const validateEmail = (email) => {
  return /\S+@\S+\.\S/.test(String(email).toLowerCase());
};
