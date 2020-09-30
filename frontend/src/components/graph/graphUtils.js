import React from "react";
import { Typography } from "@material-ui/core";

export const LABEL_MAP = {
  "cases-diff": "Cases",
  "deaths-diff": "Deaths",
  "recoveries-diff": "Recoveries",
  "cases-log": "Cases",
  "deaths-log": "Deaths",
  "recoveries-log": "Recoveries",
  cases: "Cases",
  deaths: "Deaths",
  recoveries: "Recoveries",
};

export const COLOR_MAP = {
  Cases: "#b2a300",
  Deaths: "#b2102f",
  Recoveries: "#00a152",
};

export const legendText = (value) => {
  return (
    <span
      style={{
        fontSize: ".8rem",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      }}
    >
      {LABEL_MAP[value]}
    </span>
  );
};

export const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div
        className="custom-tooltip"
        style={{
          background: "white",
          color: "black",
          border: "2px solid black",
          align: "center",
        }}
      >
        <Typography variant="body2">{label}</Typography>
        {payload.map((data) => {
          return (
            <Typography key={LABEL_MAP[data.name]} variant="body2">{`${
              LABEL_MAP[data.name]
            } : ${data.value}`}</Typography>
          );
        })}
      </div>
    );
  }

  return null;
};
