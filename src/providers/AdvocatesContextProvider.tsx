"use client";

import { actionTypes, AdvocatesContext, initialState, stateReducer } from "@/hooks/useAdvocates";
import { ReactNode, useEffect, useReducer, useState } from "react";

export default function AdvocatesContextProvider({ children }: { children: ReactNode }) {
  const [loading, toggleLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [state, dispatch] = useReducer(stateReducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        toggleLoading(true);
        const res = await fetch("/api/advocates");
        if (!res.ok) throw Error("Unable to fetch advocates");
        const data = await res.json();
        dispatch({
          type: actionTypes.SET_FIELD,
          payload: {
            field: "advocates",
            value: data,
          }
        })
        dispatch({
          type: actionTypes.SET_FIELD,
          payload: {
            field: "filteredAdvocates",
            value: data,
          }
        })
      } catch (error) {
        setError(error instanceof Error ? error : new Error(`Unknown error: ${error}`));
      } finally {
        toggleLoading(false);
      }
    }

    fetchData();
  }, []);

  const value = {
    loading,
    ...state,
    dispatch,
    error,
  }

  return <AdvocatesContext.Provider value={value}>{children}</AdvocatesContext.Provider>
}
