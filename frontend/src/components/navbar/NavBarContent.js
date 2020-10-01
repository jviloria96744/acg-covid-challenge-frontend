import React, { useContext } from "react";
import { Typography, Link } from "@material-ui/core";
import GraphContext from "../../context/graph/graphContext";

/**
 * Content of NavBar component
 * website title
 * link to original challenge description
 * Last Modified/Run Date of ETL Process
 */

const NavBarContent = () => {
  const graphContext = useContext(GraphContext);

  const { lastUpdatedDate } = graphContext;

  return (
    <div>
      <Typography variant="h3">COVID-19 Dashboard</Typography>
      <Typography variant="body1">
        <Link
          color="inherit"
          href="https://acloudguru.com/blog/engineering/cloudguruchallenge-python-aws-etl"
          target="_blank"
          rel="noopener"
        >
          ACloudGuru September 2020 Challenge
        </Link>
      </Typography>
      <Typography variant="body2">
        Last Updated: {lastUpdatedDate === null ? "" : lastUpdatedDate}
      </Typography>
    </div>
  );
};

export default NavBarContent;
