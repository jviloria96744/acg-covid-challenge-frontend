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

const setBrushDataKey = (graphSelection) => {
  if (graphSelection === "Monthly") {
    return "yearMonth";
  }

  return "date";
};

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

const createMonthlyData = (data) => {
  let yearMonthValues = data.map((record) => {
    return record.date.substring(0, 7);
  });

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
