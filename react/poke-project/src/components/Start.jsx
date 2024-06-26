import React, { useEffect, useState } from "react";
import "./Start.css";
import BackgroundGif from "./BackgroundGif";
import HealthBar from "./HealthBar";
import EndScreen from "./EndScreen";
import BattleFight from "./BattleFight";

const Start = ({
  poke1,
  poke2,
  damage,
  health,
  positionUD,
  infoM,
  setInfoM,
  attackMenu,
  setAttackMenu,
  setPositionUD,
  selected,
  setSelected,
}) => {
  const [gifVisible, setGifVisible] = useState(true);

  // Function to handle GIF visibility change
  const handleGifVisibilityChange = (isVisible) => {
    setGifVisible(isVisible);
  };

  console.log(positionUD);

  useEffect(() => {
    if (health <= 0) {
      setGifVisible(false);
    }
  }, [health]);

  return (
    <div
      className="screen-show"
      style={{
        backgroundImage:
          'url("https://preview.redd.it/d9spuwer2c491.png?width=1050&format=png&auto=webp&s=9ca8c75c63da9f8bb134e955d73e2770d073375e")',
      }}
    >
      {gifVisible && (
        <BackgroundGif
          gifUrl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ddea25ed-0d1a-41c5-a4d6-d9a334159fba/d6hqzm5-3014adcc-d04b-4da4-86af-0fbee75236d9.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkZWEyNWVkLTBkMWEtNDFjNS1hNGQ2LWQ5YTMzNDE1OWZiYVwvZDZocXptNS0zMDE0YWRjYy1kMDRiLTRkYTQtODZhZi0wZmJlZTc1MjM2ZDkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.t9BfCw71KBm3DwUsFnAOI9s4B_bfihuEepcPqBkhuGs"
          onVisibilityChange={handleGifVisibilityChange}
          duration={3000}
        />
      )}

      {!gifVisible && health > 0 && (
        <div className="battle-screen">
          <BattleFight
            damage={damage}
            attackMenu={attackMenu}
            setAttackMenu={setAttackMenu}
            positionUD={positionUD}
            selected={selected}
            myPokeSelection={poke1}
          />

          <div className="layout-poke-comp">
            <p className="show-poke-info-comp">{poke2[0].name}</p>
            <HealthBar damage={damage} health={health} />

            <img
              src={poke1[0].sprites.back_default}
              alt="front-default"
              className="poke-user"
            />
          </div>
          <div className="layout-poke-user">
            <img
              src={poke2[0].sprites.front_default}
              alt="front-default"
              className="poke-comp"
            />
            <p className="show-poke-info-user">{poke1[0].name}</p>
            <HealthBar damage={0} health={100} />
          </div>
        </div>
      )}

      {!gifVisible && health <= 0 && (
        <div>
          <EndScreen
            positionUD={positionUD}
            infoM={infoM}
            setInfoM={setInfoM}
            setPositionUD={setPositionUD}
          />
        </div>
      )}
    </div>
  );
};

export default Start;

{
  /* const [gifVisible, setGifVisible] = useState(true);

  // Function to handle GIF visibility change
  const handleGifVisibilityChange = (isVisible) => {
    setGifVisible(isVisible);
  };

  return (
    <div className="screen-show">
      {gifVisible ? (
        // Render nothing when the GIF is visible
        <BackgroundGif
          gifUrl="https://cdn.dribbble.com/users/2997089/screenshots/7072116/media/b35c696ff1bdce8f7d371e46c4947e30.gif"
          onVisibilityChange={handleGifVisibilityChange}
        />
      ) : (
        // Render pokemones when the GIF is not visible

        pokemones.map(
          (pokemon, index) => (
            //index % 3 === 0 && (
            <div
              id="poke-selected"
              key={pokemon.id}
              className="pokemon-screen"
              style={
                !selected
                  ? {
                      backgroundColor:
                        index == position ? "yellow" : "transparent",
                    }
                  : {
                      backgroundColor:
                        index == position ? "#EA6143" : "transparent",
                    }
              }
            >
              {console.log("load")}
              <img
                src={pokemon.sprites.front_default}
                alt="front-default"
                className="poke-menu-show"
              />
              {pokemon.name}
            </div>
          )
          //)
        )
      )}
    </div> */
}
