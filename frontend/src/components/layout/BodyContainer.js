import React from "react";
import { Grid } from "@material-ui/core";
import GraphContainer from "./GraphContainer";
import ControlsContainer from "./ControlsContainer";

/**
 * Container layout component for everything under the NavBar
 */

const BodyContainer = () => {
  return (
    <Grid container style={{ marginTop: "25px" }}>
      <Grid item xs={8}>
        <GraphContainer />
      </Grid>
      <Grid item xs={4}>
        <ControlsContainer />
      </Grid>
    </Grid>
  );
};

export default BodyContainer;
