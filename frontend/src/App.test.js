import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";
import GraphState from "./context/graph/GraphState";

beforeEach(() => {
  render(
    <GraphState>
      <App />
    </GraphState>
  );
});

afterEach(cleanup);

test("Render App Component Properly", () => {
  expect(screen.getByText("COVID-19 Dashboard")).toBeInTheDocument();
});

test("Render initial loading data message", () => {
  expect(screen.getByText("Loading Data...")).toBeInTheDocument();
});

test("Render graph area after data is loaded", async () => {
  expect(await screen.findByText("Daily Cases")).toBeInTheDocument();
});

test("Render controls area after data is loaded", async () => {
  expect(await screen.findByText("Graph Controls/Filters")).toBeInTheDocument();
});

test("Choose a different data type, e.g. cases/deaths/recoveries and Graph Heading should update accordingly", async () => {
  expect(await screen.findByText("Graph Controls/Filters")).toBeInTheDocument();

  let radio = screen.getByLabelText("Deaths");
  fireEvent.click(radio);
  expect(screen.getByText("Daily Deaths")).toBeInTheDocument();

  radio = screen.getByLabelText("Recoveries");
  fireEvent.click(radio);
  expect(screen.getByText("Daily Recoveries")).toBeInTheDocument();
});

test("Choose a different graph type, e.g. Daily/Monthly/Linear/Logarithmic and Graph Heading should update accordingly", async () => {
  expect(await screen.findByText("Daily Cases")).toBeInTheDocument();

  let button = screen.getByText("Monthly");
  fireEvent.click(button);
  expect(screen.getByText("Monthly Cases")).toBeInTheDocument();

  button = screen.getByText("Linear");
  fireEvent.click(button);
  expect(screen.getByText("Cumulative Cases")).toBeInTheDocument();

  button = screen.getByText("Logarithmic");
  fireEvent.click(button);
  expect(screen.getByText("Cumulative Cases (Log Scaled)")).toBeInTheDocument();
});
