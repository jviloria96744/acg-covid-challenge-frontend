import React, { useEffect, useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import NavBar from "./components/layout/NavBar";
import BodyContainer from "./components/layout/BodyContainer";
import GraphContext from "./context/graph/graphContext";

function App() {
  const graphContext = useContext(GraphContext);

  const { getCovidData, data } = graphContext;

  useEffect(() => {
    getCovidData();
    // eslint-disable-next-line
  }, []);

  const loadingData = () => {
    return (
      <Grid container style={{ marginTop: "25px" }}>
        <Typography variant="h5" style={{ paddingLeft: "24px" }}>
          Loading Data...
        </Typography>
      </Grid>
    );
  };

  return (
    <div className="App">
      <NavBar />

      {data === null ? loadingData() : <BodyContainer />}
    </div>
  );
}

export default App;
