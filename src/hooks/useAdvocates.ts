import { Advocate } from "@/types";
import { createContext, Dispatch, useContext } from "react";

export interface DataState {
  advocates: Advocate[];
  filteredAdvocates: Advocate[];
  searchTerm: string;
}

export const initialState: DataState = {
  advocates: [],
  filteredAdvocates: [],
  searchTerm: "",
}

export const actionTypes = {
  SET_FIELD: "SET_FIELD",
}

export type Action = {
  type: typeof actionTypes.SET_FIELD;
  payload: {
    field: keyof DataState;
    value: DataState[keyof DataState];
  }
}

export function stateReducer(state: DataState, action: Action): DataState {
  switch (action.type) {
    case actionTypes.SET_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      }

    default:
      return state;
  }
}

export interface AdvocatesContextType {
  loading: boolean;
  searchTerm: string;
  advocates: DataState["advocates"];
  filteredAdvocates: DataState["filteredAdvocates"];
  dispatch: Dispatch<Action>;
}

export const AdvocatesContext = createContext<AdvocatesContextType | undefined>(undefined);

export function useAdvocates(): AdvocatesContextType {
	const context = useContext(AdvocatesContext);
	if (context === undefined) {
		throw new Error("useAdvocates must be used within a AdvocatesContextProvider");
	}
	return context;
}
