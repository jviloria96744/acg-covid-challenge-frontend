import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  Brush,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { LABEL_MAP, COLOR_MAP, legendText, CustomTooltip } from "./graphUtils";
import GraphContext from "../../context/graph/graphContext";

/**
 * Graph component
 * Takes Graph Type/Data Type from Graph Context to render correct graph, e.g. Monthly Deaths
 */

const Graph = () => {
  const graphContext = useContext(GraphContext);

  const { brushDataKey, graphDataKey, graphData } = graphContext;

  return (
    <ResponsiveContainer height={400} width="100%">
      <BarChart
        data={graphData}
        margin={{
          bottom: 50,
        }}
      >
        <XAxis
          dataKey={brushDataKey}
          height={75}
          fontFamily={'"Roboto", "Helvetica", "Arial", sans-serif'}
          tick={{
            angle: -35,
            textAnchor: "end",
            dominantBaseline: "ideographic",
            fontSize: ".8rem",
          }}
        />
        <YAxis
          fontFamily={'"Roboto", "Helvetica", "Arial", sans-serif'}
          tick={{
            fontSize: ".8rem",
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend align="right" verticalAlign="top" formatter={legendText} />
        <Brush dataKey={brushDataKey} height={30} stroke="#757575" />

        {/* Originally, I planned to stack Bar charts for Cases/Deaths/Recoveries. The ratio of Cases to Deaths and Recoveries is so high that the latter two fields were barely visible */}
        <Bar
          dataKey={graphDataKey}
          stackId="a"
          fill={COLOR_MAP[LABEL_MAP[graphDataKey]]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;
