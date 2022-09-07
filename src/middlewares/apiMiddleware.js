import axios from "axios";
import { callApi } from "../actions/api";
import { hideLoading, showLoading } from "../stores/propertySlice";

const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type !== callApi.type) {
      return;
    }

    const { url, method, data, onSuccess, onError, params } = action.payload;

    try {
      dispatch({ type: showLoading.type });

      const response = await axios.request({
        baseURL: "http://localhost:4000",
        url: url,
        method: method,
        data: data,
        params: params,
      });

      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      if (onError) {
        dispatch({ type: onError, payload: error });
      }
    } finally {
      dispatch({ type: hideLoading.type });
    }
  };

export default apiMiddleware;
