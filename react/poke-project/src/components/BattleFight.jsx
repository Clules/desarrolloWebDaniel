import { useEffect, useState } from "react";
import "./BattleFight.css";

const BattleFight = ({
  damage,
  attackMenu,
  setAttackMenu,
  positionUD,
  selected,
  myPokeSelection,
}) => {
  console.log(positionUD);
  console.log(attackMenu);

  //const moves = myPokeSelection.moves;

  //const ahuevo =
  console.log(myPokeSelection);
  return (
    <div>
      {!attackMenu ? (
        !selected ? (
          <div className="text-on-top">
            <div className="pop-outin">Press 'b' to select attack...</div>
          </div>
        ) : (
          <div className="text-on-top">
            <div className="pop-outin">Press 'a' to attack..</div>
          </div>
        )
      ) : (
        <div className="attack-list">
          {myPokeSelection[0].moves.map((ataque, index) => (
            <div
              className="attack-name"
              style={{
                backgroundColor: index == positionUD ? "blue" : "white",
                color: index == positionUD ? "white" : "black ",
              }}
            >
              {ataque.move.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BattleFight;
