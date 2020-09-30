import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import GraphContext from "../../context/graph/graphContext";

const GraphSelectionButtons = () => {
  const graphContext = useContext(GraphContext);

  const { graphSelection, setGraphType } = graphContext;

  const GRAPH_SELECTIONS = ["Daily", "Monthly", "Linear", "Logarithmic"];

  const handleGraphSelection = (e, newSelection) => {
    setGraphType(newSelection);
  };

  return (
    <Grid item>
      <ToggleButtonGroup
        value={graphSelection}
        exclusive
        onChange={handleGraphSelection}
        size="small"
        style={{ background: "#757575" }}
      >
        {GRAPH_SELECTIONS.map((selection) => {
          return (
            <ToggleButton
              className="graph-buttons"
              size="small"
              value={selection}
              key={selection}
              style={
                graphSelection === selection
                  ? { color: "white", fontWeight: "bold" }
                  : { color: "white" }
              }
            >
              {selection}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Grid>
  );
};

export default GraphSelectionButtons;
