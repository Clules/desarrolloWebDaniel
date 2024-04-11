import React, { useState } from "react";
import "./ScreenPokemones.css";
import BackgroundGif from "./BackgroundGif";

const ScreenPokemones = ({ pokemones, position, selected, gifVisble }) => {
  const [gifVisible, setGifVisible] = useState(true);

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
          duration={11000}
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
    </div>
  );
  /*console.log({ pokemones, position });

  return (
    <div className="screen-show">
      <BackgroundGif gifUrl="https://cdn.dribbble.com/users/2997089/screenshots/7072116/media/b35c696ff1bdce8f7d371e46c4947e30.gif" />

      {pokemones.map(
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
            <img
              src={pokemon.sprites.front_default}
              alt="front-default"
              className="poke-menu-show"
            />
            {pokemon.name}
          </div>
        )
        //)
      )}
    </div>
  );*/
};
export default ScreenPokemones;
