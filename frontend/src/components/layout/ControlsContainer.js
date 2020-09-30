import React from "react";
import { Grid } from "@material-ui/core";
import ControlHeader from "../controls/ControlHeader";
import DataTypeRadio from "../controls/DataTypeRadio";
import ControlContent from "../controls/ControlContent";

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
