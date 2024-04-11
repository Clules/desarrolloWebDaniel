const ScreenPokemones = ({ pokemones, position }) => {
  console.log({ pokemones, position });
  return (
    <div className="screen-show">
      {pokemones.map(
        (pokemon, index) => (
          //index % 3 === 0 && (
          <div
            key={pokemon.id}
            className="pokemon-screen"
            style={{
              backgroundColor: index == position ? "yellow" : "transparent",
            }}
          >
            <img src={pokemon.sprites.front_default} alt="front-default" />
            {pokemon.name}
          </div>
        )
        //)
      )}
    </div>
  );
};
export default ScreenPokemones;
