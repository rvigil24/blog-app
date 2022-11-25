export const authMiddleware = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};
