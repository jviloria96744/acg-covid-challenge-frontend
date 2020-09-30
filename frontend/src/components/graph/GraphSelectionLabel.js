import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import GraphContext from "../../context/graph/graphContext";

const GraphSelectionLabel = () => {
  const graphContext = useContext(GraphContext);

  return (
    <Grid item>
      <Typography variant="h5">{graphContext.graphLabel}</Typography>
    </Grid>
  );
};

export default GraphSelectionLabel;
