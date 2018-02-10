import React, { Component } from "react";
import data from "./quiz.json";
import Chart from "./Chart";
import logos from "./logos";

import "./Endsceen.css";

export default ({ gal, right }) => {
  console.log("logos", logos);

  const parties = data.parties.map(p => {
    let party = { ...p };

    // ensure we agree
    if (party.short === "DD") {
      party.gal = gal;
      party.right = right;
    }

    party.distance = calculateDistance({ party: party, gal, right });
    party.logo = logos[party.short];
    console.log("logo", party.short, party.logo);

    return party;
  });

  parties.sort(byDistance);

  return (
    <div>
      <p className="EndscreenSummary">Du verkar hålla med Datademokraterna!</p>
      <p>Så här hamnar du på den politiska skalan</p>
      {/* <p>
        Gal: {gal}, right: {right}
      </p> */}

      <Chart parties={parties} gal={gal} right={right} />

      <div className="ResultList">
        <p>Så passar partierna dina åsikter</p>
        {parties.map(party => {
          return <ResultBar party={party} key={party.short} />;
        })}
      </div>
    </div>
  );
};

function byDistance(a, b) {
  if (a.distance > b.distance) {
    return 1;
  }
  if (a.distance < b.distance) {
    return -1;
  }
  return 0;
}

function calculateDistance({ party, gal, right }) {
  const g2 = (gal - party.gal) ** 2;
  const r2 = (right - party.right) ** 2;
  return Math.sqrt(g2 + r2);
}

const ResultBar = ({ party, distance }) => {
  const percentage = Math.max(0, 100 * (1 - party.distance / 2));
  return (
    <div className="ResultBar" style={{ width: `${percentage}%` }}>
      <img src={party.logo} className="ResultPartyLogo" />
      {party.name}
    </div>
  );
};
