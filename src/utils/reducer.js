export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      const newCount = state === 0 ? 0 : state - 1;
      return newCount;

    default:
      throw new Error("No action type present");
  }
};
