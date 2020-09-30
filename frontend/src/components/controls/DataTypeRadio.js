import React, { useContext } from "react";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import GraphContext from "../../context/graph/graphContext";

const DataTypeRadio = () => {
  const graphContext = useContext(GraphContext);

  const { graphDataKey, setDataKey } = graphContext;

  const handleChange = (event) => {
    setDataKey(event.target.value);
  };

  return (
    <Grid
      item
      xs={12}
      align="center"
      style={{ marginTop: "25px", paddingLeft: "10px" }}
    >
      <Typography variant="body1">Choose Graph Data</Typography>
      <RadioGroup
        name="data-type"
        row
        value={graphDataKey.split("-")[0]}
        onChange={handleChange}
        style={{ justifyContent: "center" }}
      >
        <FormControlLabel value="cases" control={<Radio />} label="Cases" />
        <FormControlLabel value="deaths" control={<Radio />} label="Deaths" />
        <FormControlLabel
          value="recoveries"
          control={<Radio />}
          label="Recoveries"
        />
      </RadioGroup>
      <Divider />
    </Grid>
  );
};

export default DataTypeRadio;
