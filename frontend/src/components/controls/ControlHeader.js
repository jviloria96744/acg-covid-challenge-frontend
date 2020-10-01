import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

/**
 * Header component for Graph Controls container
 */

const ControlHeader = () => {
  return (
    <Grid item xs={12} align="center">
      <Typography variant="h5">Graph Controls/Filters</Typography>
      <Divider />
    </Grid>
  );
};

export default ControlHeader;
