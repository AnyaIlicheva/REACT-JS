export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("dispatching", action);
  console.log(
    "Текущее состояние(ДО того, как сработает action) store",
    store.getState()
  );
  const result = next(action);
  console.log(
    "Текущее состояние(ПОСЛЕ того, как сработает action) store",
    store.getState()
  );
  return result;
};
