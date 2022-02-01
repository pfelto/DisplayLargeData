export const dataReducer = (state, action) => {
  switch (action.type) {
    case "pending":
      return { ...state, status: action.status };
    case "resolved":
      return {
        ...state,
        status: action.status,
        data: action.data,
        error: null,
      };
    case "rejected":
      return {
        ...state,
        status: action.status,
        data: null,
        error: action.error,
      };
    case "urlChange":
      return {
        ...state,
        currentUrl: action.currentUrl,
      };
    default:
      return state;
  }
};
