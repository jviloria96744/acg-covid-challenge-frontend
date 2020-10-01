import React from "react";
import { Grid } from "@material-ui/core";
import Graph from "../graph/Graph";
import GraphSelectionLabel from "../graph/GraphSelectionLabel";
import GraphSelectionButtons from "../graph/GraphSelectionButtons";

/**
 * Container for graph component as well as graph type selection buttons
 */

const GraphContainer = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={5}
      justify="space-around"
      style={{ paddingLeft: "24px", paddingRight: "24px" }}
    >
      <Grid item className="graph-item">
        <Grid container justify="space-between">
          <GraphSelectionLabel />
          <GraphSelectionButtons />
        </Grid>
      </Grid>
      <Grid item className="graph-item" align="center">
        <Graph />
      </Grid>
    </Grid>
  );
};

export default GraphContainer;
