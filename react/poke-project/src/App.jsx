import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ScreenPokemones from "./components/ScreenPokemones";
import Start from "./components/Start";
import BackgroundGif from "./components/BackgroundGif";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [position, setPosition] = useState(0);
  const [myPokeSelection, setMyPokeSelection] = useState([]);
  const [compSelection, setcompSelection] = useState([]);
  const [flag, setFlag] = useState(false);
  const [selected, setSelected] = useState(false);
  //const [gifVisible, setGifVisible] = useState(true);

  const [startG, setStart] = useState(false);

  const pokeUrl = "https://pokeapi.co/api/v2/pokemon";

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const pokemonData = async (pokeUrl) => {
    const response = await fetchData(pokeUrl);

    const dataPromises = response.results.map((poke) =>
      fetchData(pokeUrl + "/" + poke.name)
    );

    const pokemonImg = await Promise.all(dataPromises);
    setPokemones(pokemonImg);
    console.log(pokemonImg);
  };

  const handleSelection = (direction) => {
    if (!selected) {
      if (direction && position < pokemones.length - 1) {
        setPosition(position + 1);
      } else if (!direction && position > 0) {
        setPosition(position - 1);
      }
    } else return;
    console.log(position);
  };

  const filterSelection = (x) => {
    if (!startG) {
      const mySelection = pokemones.filter((value, idx) => position == idx);
      setMyPokeSelection(mySelection);
      console.log(mySelection);

      computerSelection();
      x = !selected;
      setSelected(x);
    } else return;
  };

  const computerSelection = () => {
    const computerPos = Math.floor(Math.random() * 20);
    const computerSelect = pokemones.filter(
      (value, idx) => computerPos === idx
    );
    setcompSelection(computerSelect);
    console.log(computerSelect);
  };

  const startGame = (star) => {
    selected ? setStart(star) : console.log(star);
  };

  const buttonOn = (a) => {
    a
      ? (document.getElementById("button-onof").style.backgroundColor =
          "#000000")
      : (document.getElementById("button-onof").style.backgroundColor = "red");

    reset();

    setFlag(!a);

    console.log(flag);
  };

  const reset = () => {
    setStart(false);
    setSelected(false);
    setPosition(0);
  };

  // const backScreen = () => {
  //   setGifVisible(false);
  //   reset();
  // };

  useEffect(() => {
    pokemonData(pokeUrl);
  }, []);

  return (
    <>
      <div className="main-container">
        <h1>Hola mundo</h1>
        <div className="layout-game">
          <div className="screen-containter">
            <div className="screen-layout">
              <div className="screen-container">
                <div className="title-container">
                  <hr color="red" />
                  <p className="texto">DOT MATRIX WITH STEREO SOUND</p>
                  <hr color="red" />
                </div>

                <div className="battery-show">
                  <div className="battery-point-container">
                    <div>
                      <button
                        id="button-onof"
                        className="battery-point"
                        onClick={() => buttonOn(flag)}
                      ></button>
                    </div>
                    <br />
                    <p className="texto4">On/Off</p>
                  </div>
                  {flag == true ? (
                    pokemones && !startG ? (
                      <ScreenPokemones
                        pokemones={pokemones}
                        position={position}
                        selected={selected}
                        //gifVisible={gifVisible}
                      />
                    ) : (
                      <Start poke1={myPokeSelection} poke2={compSelection} />
                    )
                  ) : (
                    <div className="screen-show-off"></div>
                  )}
                  ;
                </div>
              </div>
            </div>
          </div>
          <p className="texto2">Nintendo GAME BOY</p>
          {/* <button onClick={() => backScreen()}>a</button> */}

          <div className="button-container">
            <div className="container-pad">
              <div>
                <button
                  className="button-left"
                  onClick={() => handleSelection(false)}
                ></button>
              </div>
              <div className="cruz">
                <button className="button-top"></button>
                <button className="button-bottom"></button>
              </div>
              <div>
                <button
                  className="button-right"
                  onClick={() => handleSelection(true)}
                ></button>
              </div>
            </div>
            <div className="container-select">
              <div className="container-button-select">
                <button
                  className="button-select"
                  onClick={() => filterSelection(true)}
                ></button>
                <div className="texto3">Select</div>
              </div>
              <div className="container-button-start">
                <button
                  className="button-start"
                  onClick={() => startGame(true)}
                ></button>
                <div className="texto3">Start</div>
              </div>
            </div>
            <div className="container-action">
              <div className="button-b-container">
                <button className="button-b"></button>
                <div className="texto3">b</div>
              </div>
              <div className="button-a-container">
                <button className="button-a"></button>
                <div className="texto3">a</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;