import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import GraphContext from "../../context/graph/graphContext";

/**
 * Label/Header to determine what graph type/data type is being rendered, e.g. Daily Cases/Monthly Deaths
 */

const GraphSelectionLabel = () => {
  const graphContext = useContext(GraphContext);

  return (
    <Grid item>
      <Typography variant="h5">{graphContext.graphLabel}</Typography>
    </Grid>
  );
};

export default GraphSelectionLabel;
