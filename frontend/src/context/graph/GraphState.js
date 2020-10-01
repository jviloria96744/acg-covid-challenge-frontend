import React, { useReducer } from "react";
import GraphContext from "./graphContext";
import GraphReducer from "./graphReducer";
import { GET_DATA, SET_GRAPH_TYPE, SET_DATA_KEY } from "../types";

const GraphState = (props) => {
  const initialState = {
    graphSelection: "Daily",
    data: null,
    graphData: null,
    lastUpdatedDate: null,
    dateFilterRange: null,
    brushDataKey: "date",
    graphDataKey: "cases-diff",
    graphLabel: "Daily Cases",
  };

  const [state, dispatch] = useReducer(GraphReducer, initialState);

  /**
   * Gets data from API created in back-end project
   *
   */
  const getCovidData = async () => {
    let url = "https://api.jviloria.com/covid19etlchallenge/covid_data";
    const res = await fetch(url, {
      method: "GET",
      mode: "cors",
    });

    let data = await res.json();

    dispatch({
      type: GET_DATA,
      payload: data,
    });
  };

  /**
   * Sets graph type
   *
   * @param {string} selectedGraph, takes values in ["Daily", "Monthly", "Linear", "Logarithmic"]
   */
  const setGraphType = (selectedGraph) => {
    dispatch({
      type: SET_GRAPH_TYPE,
      payload: {
        dataKey: state.graphDataKey.split("-")[0], //cases-diff -> cases
        graphSelection: selectedGraph,
      },
    });
  };

  /**
   * Sets data key
   *
   * @param {string} selectedDataKey, takes values in ["Cases", "Deaths", "Recoveries"]
   */
  const setDataKey = (selectedDataKey) => {
    dispatch({
      type: SET_DATA_KEY,
      payload: {
        dataKey: selectedDataKey,
        graphSelection: state.graphSelection,
      },
    });
  };

  return (
    <GraphContext.Provider
      value={{
        getCovidData: getCovidData,
        setGraphType: setGraphType,
        setDataKey: setDataKey,
        graphSelection: state.graphSelection,
        data: state.data,
        graphData: state.graphData,
        lastUpdatedDate: state.lastUpdatedDate,
        brushDataKey: state.brushDataKey,
        graphDataKey: state.graphDataKey,
        graphLabel: state.graphLabel,
      }}
    >
      {props.children}
    </GraphContext.Provider>
  );
};

export default GraphState;
