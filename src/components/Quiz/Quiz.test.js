import React from "react";
import ReactDOM from "react-dom";
import Quiz, { calculateAverage } from "./Quiz";

it("calculates the average movingly", () => {
  let average = 0;
  average = calculateAverage({ last: average, current: 1, n: 1 });
  expect(average).toBe(1);
  average = calculateAverage({ last: average, current: 0, n: 2 });
  expect(average).toBe(0.5);
  average = calculateAverage({ last: average, current: -1, n: 3 });
  expect(average).toBe(0);
  average = calculateAverage({ last: average, current: 0.5, n: 4 });
  expect(average).toBe(0.125);
});
