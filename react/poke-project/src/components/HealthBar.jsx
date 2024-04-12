import { useEffect, useState } from "react";
import "./HealthBar.css";

const HealthBar = ({ damage, health }) => {
  let barWidth;
  let hitWidth;

  if (health > 0) {
    barWidth = (health / 100) * 100;
    hitWidth = (damage / health) * 100 + "%";
  } else {
    barWidth = 0;
    hitWidth = 0;
  }
  return (
    <div className="health-bar">
      {console.log("damage: " + damage)}
      {console.log("vida: " + health)}
      <div className="bar" style={{ width: `${barWidth}%` }}>
        {<div className="hit" style={{ width: `${hitWidth}%` }}></div>}
      </div>
    </div>
  );
};

export default HealthBar;
