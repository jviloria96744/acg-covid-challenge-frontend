import { GET_DATA, SET_GRAPH_TYPE, SET_DATA_KEY } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_GRAPH_TYPE:
      return {
        ...state,
        graphSelection: action.payload.graphSelection,
        graphData:
          action.payload.graphSelection === "Monthly"
            ? [...state.monthlyData]
            : [...state.data],
        brushDataKey: setBrushDataKey(action.payload.graphSelection),
        graphDataKey: setGraphDataKey(
          action.payload.graphSelection,
          action.payload.dataKey
        ),
        graphLabel: setGraphLabel(
          action.payload.graphSelection,
          action.payload.dataKey
        ),
      };
    case GET_DATA:
      return {
        ...state,
        data: action.payload.data,
        graphData: [...action.payload.data],
        monthlyData: createMonthlyData(action.payload.data),
        lastUpdatedDate: action.payload.last_modified_date,
      };
    case SET_DATA_KEY:
      return {
        ...state,
        graphDataKey: setGraphDataKey(
          action.payload.graphSelection,
          action.payload.dataKey
        ),
        graphLabel: setGraphLabel(
          action.payload.graphSelection,
          action.payload.dataKey
        ),
      };
    default:
      return state;
  }
};

/**
 * Gets brush filter key as well as data object key for X-Axis values based on graph selection type
 *
 */
const setBrushDataKey = (graphSelection) => {
  if (graphSelection === "Monthly") {
    return "yearMonth";
  }

  return "date";
};

/**
 * Sets correct key/column for Y-Axis fields based on graph/data type selected
 *
 */
const setGraphDataKey = (graphSelection, graphDataKey) => {
  switch (true) {
    case ["Daily", "Monthly"].includes(graphSelection):
      return `${graphDataKey}-diff`;
    case graphSelection === "Linear":
      return graphDataKey;
    case graphSelection === "Logarithmic":
      return `${graphDataKey}-log`;
    default:
      return "cases";
  }
};

/**
 * Sets correct Graph Header/Label based on graph/data selections
 *
 */
const setGraphLabel = (graphSelection, graphDataKey) => {
  const LABEL_MAP = {
    cases: "Cases",
    deaths: "Deaths",
    recoveries: "Recoveries",
  };

  switch (true) {
    case ["Daily", "Monthly"].includes(graphSelection):
      return `${graphSelection} ${LABEL_MAP[graphDataKey]}`;
    case graphSelection === "Linear":
      return `Cumulative ${LABEL_MAP[graphDataKey]}`;
    case graphSelection === "Logarithmic":
      return `Cumulative ${LABEL_MAP[graphDataKey]} (Log Scaled)`;
    default:
      return "";
  }
};

/**
 * Creates aggregated data for use in monthly view
 * Data from initial API call is grouped at the Year/Month level and summed for individual cases/deaths/recoveries
 *
 * @param {object} data
 */
const createMonthlyData = (data) => {
  // date field is in format, YYYY-MM-DD
  // this is creating a year/month field in the format YYYY-MM
  let yearMonthValues = data.map((record) => {
    return record.date.substring(0, 7);
  });

  // get unique year/month values and loop over them aggregating cases/deaths and recoveries for each value
  yearMonthValues = [...new Set(yearMonthValues)];

  return yearMonthValues.map((date) => {
    const filtered_data = data.filter(
      (record) => record.date.substring(0, 7) === date
    );

    const result = {
      yearMonth: date,
    };

    ["cases-diff", "deaths-diff", "recoveries-diff"].forEach((dataType) => {
      result[dataType] = filtered_data.reduce((sum, record) => {
        return sum + parseInt(record[dataType]);
      }, 0);
    });

    return result;
  });
};
