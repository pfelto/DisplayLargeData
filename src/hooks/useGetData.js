import { useReducer, useEffect } from "react";
import { fetchApiPagination } from "../utils/fetchApi";
import { dataReducer } from "../reducer/dataReducer";
import { currentURL } from "../utils/currentUrl";

export function useGetData() {
  const [state, dispatch] = useReducer(dataReducer, {
    status: "idle",
    currentUrl: currentURL,
    data: null,
    error: null,
  });

  useEffect(() => {
    let _isMounted = true;
    if (_isMounted) dispatch({ type: "pending", status: "pending" });
    fetchApiPagination(state.currentUrl).then(
      (data) => {
        if (_isMounted) {
          dispatch({
            type: "resolved",
            status: "resolved",
            data,
          });
        }
      },
      (error) => {
        if (_isMounted) {
          dispatch({
            type: "rejected",
            status: "rejected",
            error,
          });
        }
      }
    );
    return () => (_isMounted = false);
  }, [state.currentUrl]);

  return {
    status: state.status,
    currentUrl: state.currentUrl,
    data: state.data,
    error: state.error,
    dispatch,
  };
}
