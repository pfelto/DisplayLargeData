import { useReducer, useEffect } from "react";
import { fetchApiPagination } from "../utils/fetchApi";
import { dataReducer } from "../reducer/dataReducer";
import { currentURL } from "../utils/currentUrl";

export function useGetData() {
  const [state, dispatch] = useReducer(dataReducer, {
    status: "idle",
    data: null,
    error: null,
  });

  //console.log(state.currentUrl);

  useEffect(() => {
    let _isMounted = true;
    if (_isMounted) dispatch({ type: "pending", status: "pending" });
    setTimeout(() => {
      fetchApiPagination(currentURL).then(
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
    }, 500);
    return () => (_isMounted = false);
  }, []);

  return {
    status: state.status,
    data: state.data,
    error: state.error,
    dispatch,
  };
}
