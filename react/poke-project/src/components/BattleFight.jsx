import { useEffect, useState } from "react";
import "./BattleFight.css";

const BattleFight = ({
  damage,
  attackMenu,
  setAttackMenu,
  positionUD,
  selected,
}) => {
  console.log(positionUD);
  console.log(attackMenu);
  const attackList = [
    "water attack",
    "fire attack",
    "earth attack",
    "lo attack",
    "mas attack",
    "chi attack",
  ];
  return (
    <div>
      {!attackMenu ? (
        !selected ? (
          <div className="text-on-top">
            <div className="pop-outin">Press 'b' to select attack...</div>
          </div>
        ) : (
          <div className="text-on-top">
            <div className="pop-outin">Press 'a' to attack...</div>
          </div>
        )
      ) : (
        <div className="attack-list">
          {attackList.map((ataque, index) => (
            <div
              className="attack-name"
              key={ataque}
              style={{
                backgroundColor: index == positionUD ? "blue" : "white",
                color: index == positionUD ? "white" : "black ",
              }}
            >
              {ataque}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BattleFight;
