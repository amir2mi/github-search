import axios from "axios";

const api = (store: any) => (next: any) => async (action: any) => {
  next(action);
  if (action.type !== "callApi") return;

  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      url,
      method,
      data,
    });

    // dispatch action to update state
    store.dispatch({ type: onSuccess, payload: response.data });
  } catch (e: any) {
    // dispatch action to handle error
    store.dispatch({ type: onError, payload: e.response.data });
  }
};

export default api;
