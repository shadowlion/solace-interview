"use client";

import { actionTypes, useAdvocates } from "@/hooks/useAdvocates"
import { ChangeEvent } from "react";

export default function Search() {
  const { searchTerm, advocates, dispatch } = useAdvocates();

  function handleOnChangeInput(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: actionTypes.SET_FIELD,
      payload: {
        field: "searchTerm",
        value: e.target.value
      }
    })
  }

  function handleOnClickResetSearch() {
    dispatch({
      type: actionTypes.SET_FIELD,
      payload: {
        field: "filteredAdvocates",
        value: advocates,
      }
    })

    dispatch({
      type: actionTypes.SET_FIELD,
      payload: {
        field: "searchTerm",
        value: "",
      }
    })
  }

  return (
    <div className="p-4 border rounded-md shadow-sm bg-white space-y-4 w-full max-w-md">
      <p className="text-lg font-semibold text-gray-800">Search</p>
      <p className="text-sm text-gray-600">
        Searching for: <span id="search-term" className="font-medium text-blue-600">{searchTerm}</span>
      </p>
      <input
        type="text"
        value={searchTerm}
        onChange={handleOnChangeInput}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter search term..."
      />
      <button
        onClick={handleOnClickResetSearch}
        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
      >
        Reset Search
      </button>
    </div>
  )
}
