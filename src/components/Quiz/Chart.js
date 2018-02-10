import React, { Component } from "react";
import data from "./quiz.json";
import "./Chart.css";

export default ({ parties, gal, right }) => {
  return (
    <div className="Chart">
      <div className="GraphContainer">
        <svg className="graph" version="1.1" viewBox="0 0 1000 1000">
          <title id="title">A line chart showing some information</title>
          <g className="grid x-grid" id="xGrid">
            <line x1="500" x2="500" y1="50" y2="950" />
          </g>
          <g className="grid y-grid" id="yGrid">
            <line x1="120" x2="900" y1="500" y2="500" />
          </g>
          <g className="labels x-labels">
            <text x="500" y="20" className="label-title">
              Grön, alternativ, Libertär
            </text>
            <text x="500" y="980" className="label-title">
              Traditionell, auktoritär, nationalistisk
            </text>
          </g>
          <g className="labels y-labels">
            <text x="10" y="507" className="label-title">
              Vänster
            </text>
            <text x="990" y="508" className="label-title right">
              Höger
            </text>
          </g>
          <g className="data" data-setname="Our first data set">
            {parties.map(party => {
              let w = 40;
              return (
                <image
                  x={500 + party.right * 450 - w / 2}
                  y={500 - party.gal * 450 - w / 2}
                  href={party.logo}
                  height={w}
                  width={w}
                />
              );
            })}
            <circle cx={500 + right * 450} cy={500 - gal * 450} r="40" />
          </g>
        </svg>
      </div>
    </div>
  );
};
