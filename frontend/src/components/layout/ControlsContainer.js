import React from "react";
import { Grid } from "@material-ui/core";
import ControlHeader from "../controls/ControlHeader";
import DataTypeRadio from "../controls/DataTypeRadio";
import ControlContent from "../controls/ControlContent";

/**
 * Container component for the input form for selecting data fields that are displayed on graph
 * This container also contains a description on how to use graph
 */

const ControlsContainer = () => {
  return (
    <Grid container justify="center">
      <ControlHeader />
      <DataTypeRadio />
      <ControlContent />
    </Grid>
  );
};

export default ControlsContainer;
