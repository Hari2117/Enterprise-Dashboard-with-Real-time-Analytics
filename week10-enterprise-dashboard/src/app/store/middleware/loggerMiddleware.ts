export const loggerMiddleware = store => next => action => {
  console.log("Dispatch:", action)
  const result = next(action)
  console.log("Next State:", store.getState())
  return result
}