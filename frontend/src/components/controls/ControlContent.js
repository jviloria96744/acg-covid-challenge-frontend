import React from "react";
import { Grid, Typography } from "@material-ui/core";

/**
 * Component for description of Graph use
 */

const ControlContent = () => {
  return (
    <Grid item xs={12} style={{ marginTop: "25px" }}>
      <Typography variant="body2">
        Use the control above to change the data type, e.g.
        Cases/Deaths/Recoveries. You can also change the graph type on the
        buttons to the top right of the graph to view the data at different
        levels of aggregation/transformation. Daily/Monthly graphs are
        incremental data values at the daily/monthly levels. Linear and
        Logarithmic Graph Types view aggregated data. The bar under the X-Axis
        Labels can be used to filter to a range of X-Axis values, i.e. dates or
        months
      </Typography>
    </Grid>
  );
};

export default ControlContent;
