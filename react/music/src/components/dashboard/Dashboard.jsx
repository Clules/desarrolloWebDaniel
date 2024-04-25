import React, { useState } from "react";
import { fetchSpotifyApi } from "../../api/spotifyAPI";
import StarsBackground from "../stars/StarsBackground";
import { getDataAuth } from "../../setup";
import { authFLow } from "../../setup";
import { Route } from "react-router";

import Playlist from "../dashboardShows/Playlist";

const Dashboard = () => {
  const hostP = "http://localhost:5173/";
  const hostL = "http://127.0.0.1:5173/";
  const [search, setSearch] = useState({
    track: "",
    artist: "",
  });

  const [songs, setSongs] = useState([]);
  const [devices, setDevices] = useState([]);
  const [deviceSel, setDeviceSel] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [playlistID, setPlaylistID] = useState("");
  const [current, setCurrent] = useState([]);

  const [show, setShow] = useState(2);

  const [color, setColor] = useState(0);

  const types = [
    "album",
    "artist",
    "playlist",
    "track",
    "show",
    "episode",
    "audiobook",
  ];

  const [option, setOption] = useState("");

  const handleShowScreen = (a) => {
    setShow(a);
  };

  const handleOnChange = (e) => {
    setSongs([]);

    const newValues = {
      ...search,
      [e.target.name]: e.target.value,
    };
    setSearch(newValues);
    console.log(newValues);
  };

  const handleChange = async () => {
    const params = new URLSearchParams();

    if (search.artist == "") {
      params.append("q", encodeURI(`remaster track:${search.track} `));
    } else {
      params.append(
        "q",
        encodeURI(`remaster track:${search.track} artist:${search.artist}`)
      );
    }
    params.append("type", option);

    const queryString = params.toString();
    console.log(queryString);
    const url = "https://api.spotify.com/v1/search";

    const updatedURL = `${url}?${queryString}`;
    const token = `Bearer ${localStorage.getItem("token")}`;

    const response = await fetchSpotifyApi(
      updatedURL,
      "GET",
      null,
      "application/json",
      token
    );
    console.log(response);

    if (option == "track") {
      setSongs(
        response[`${option}s`].items.map((song) => ({
          id: song.id,
          name: song.name,
          artist: song.artists[0].name,
          album: song.album.name,
          image: song.album.images[0].url,
          uri: song.uri,
          duration: `${Math.floor(song.duration_ms / 60000)}:${(
            (song.duration_ms % 60000) /
            1000
          )
            .toFixed(0)
            .padStart(2, "0")}`,
        }))
      );
    } else if (option == "artist") {
      setSongs(
        response[`${option}s`].items.map((artist) => ({
          name: artist.name,
          image: artist.images[0].url,
        }))
      );
    }
  };

  const handleDeviceId = async () => {
    const token = `Bearer ${localStorage.getItem("token")}`;

    const getDeviceId = await fetchSpotifyApi(
      `https://api.spotify.com/v1/me/player/devices`,
      "GET",
      null,
      "application/json",
      token
    );

    console.log(getDeviceId);
    setDevices(getDeviceId);
  };

  const handlePlayMusic = async (song) => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const data = {
      uris: [song],
    };

    console.log(song);
    console.log(deviceSel);
    const id_device = deviceSel;

    if (deviceSel != "") {
      const playSong = await fetchSpotifyApi(
        `https://api.spotify.com/v1/me/player/play?device_id=${id_device}`,
        "PUT",
        JSON.stringify(data),
        "application/json",
        token
      );
      console.log(playSong);
    } else if (deviceSel == "" || deviceSel == "nada") {
      alert("Device not selected");
    }
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setOption(e.target.value);
  };

  const handleDeviceChange = (e) => {
    console.log(e.target.value);
    setDeviceSel(e.target.value);
  };

  const handlePlaylists = async () => {
    const token = `Bearer ${localStorage.getItem("token")}`;

    const response = await fetchSpotifyApi(
      `https://api.spotify.com/v1/me/playlists?limit=50&offset=0`,
      "GET",
      null,
      "application/json",
      token
    );
    console.log(response);
    setPlaylists(response);
  };

  const handleThePlaylist = async (id) => {
    const ran = Math.floor(Math.random() * 7);
    const token = `Bearer ${localStorage.getItem("token")}`;

    const response = await fetchSpotifyApi(
      `https://api.spotify.com/v1/playlists/${id}`,
      "GET",
      null,
      "application/json",
      token
    );
    console.log(response);
    handleShowScreen(1);
    setPlaylistID(response);
    if (response.id != playlistID.id) {
      setColor(ran);
    }
  };

  const handleCurrent = async () => {
    const token = `Bearer ${localStorage.getItem("token")}`;

    const response = await fetchSpotifyApi(
      `https://api.spotify.com/v1/me/player/currently-playing`,
      "GET",
      null,
      "application/json",
      token
    );
    console.log(response);
    setCurrent(response);
  };

  const getToken = async () => {
    // stored in the previous step
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
    let codeVerifier = localStorage.getItem("code_verifier");
    console.log({ codeVerifier });
    const url = "https://accounts.spotify.com/api/token";
    const clientId = "41ba1a8c200940ae8e398229944e8a43";
    const redirectUri = `${hostL}dashboard`;
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      }),
    };

    const body = await fetch(url, payload);
    const response = await body.json();

    localStorage.setItem("token", response.access_token);
    console.log(response);
  };

  return (
    <>
      <div
        className="container p-0  h-screen m-0 flex flex-row w-dvh pt-1"
        style={{
          background: "black",
        }}
      >
        <div className="absolute inset-0 flex flex-row">
          <div className="flex flex-col text-center h-screen justify-evenly md:items-center text-black w-1/6 pl-2 ">
            <div className="h-1/6 w-full bg-zinc-900 mx-1 mt-2 mb-1 shadow-xl rounded-md flex flex-col justify-around py-9 items-start">
              {" "}
              {/*home div */}
              <button
                className="relative rounded-lg w-full px-1 py-3 my-1 mx-0 h-10 flex flex-row text-white stroke-white fill-white hover:text-green-500 hover:fill-green-500 hover:stroke-green-500 hover:underline justify-start items-center "
                onClick={() => getToken()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="h-full stroke-currentColor fill-currentColor mx-4"
                >
                  {" "}
                  <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z" />
                </svg>
                <p
                  className=" font-normal text-left"
                  style={{ fontWeight: "10", fontSize: "0.5rem" }}
                >
                  Home
                </p>
              </button>
              <button
                className="relative rounded-lg w-full px-1 py-3 my-1 mx-0 h-10 flex flex-row text-white stroke-white fill-white hover:text-green-500 hover:fill-green-500 hover:stroke-green-500 hover:underline justify-start items-center "
                onClick={() => handleShowScreen(2)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className=" h-full stroke-currentColor fill-currentColor mx-4"
                >
                  {" "}
                  <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
                </svg>
                <p
                  className=" font-normal text-left"
                  style={{ fontWeight: "10", fontSize: "0.5rem" }}
                >
                  Search
                </p>
              </button>
            </div>
            <div className="h-5/6 w-full bg-zinc-900 mx-1 mt-1 mb-2 shadow-xl rounded-md flex flex-col justify-start pb-5 pt-2 overflow-hidden">
              {/*library div */}
              <div className="relative rounded-lg w-full px-1 py-0 my-2 mx-0 h-2/12 flex flex-row justify-between">
                <div
                  className=" text-white stroke-white  w-2/3 ml-3 fill-white hover:text-green-500 hover:fill-green-500 hover:stroke-green-500 hover:underline items-center flex flex-row cursor-pointer"
                  onClick={() => handlePlaylists()}
                >
                  <svg
                    width="20"
                    height="15px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-currentColor fill-currentColor"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 2.5l.5-.5h2l.5.5v11l-.5.5h-2l-.5-.5v-11zM6 3v10h1V3H6zm3.171.345l.299-.641 1.88-.684.64.299 3.762 10.336-.299.641-1.879.684-.64-.299L9.17 3.345zm1.11.128l3.42 9.396.94-.341-3.42-9.397-.94.342zM1 2.5l.5-.5h2l.5.5v11l-.5.5h-2l-.5-.5v-11zM2 3v10h1V3H2z"
                      ></path>
                    </g>
                  </svg>
                  <p
                    className=" font-normal text-left w-2/3 ml-2"
                    style={{ fontWeight: "10", fontSize: "0.5rem" }}
                  >
                    Your Library
                  </p>
                </div>
                <button
                  className="text-xs stroke-white fill-white hover:fill-green-500 hover:stroke-green-500"
                  onClick={() => handleDeviceId()}
                >
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-currentColor fill-currentColor"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M6 12H18M12 6V18"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
                <button className="text-xs mr-2 stroke-white fill-white hover:fill-green-500 hover:stroke-green-500">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 24 24"
                    className="stroke-currentColor fill-currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </div>

              <div className="flex flex-col justify-start mt-2  h-full text-white text-xs overflow-auto flex-grow">
                {playlists.length != 0
                  ? playlists.items.map((playlist) => (
                      <div
                        key={playlist.id}
                        className="flex flex-row m-1 align-middle hover:bg-zinc-600 p-2 justify-between group items-center"
                        onClick={() => handleThePlaylist(playlist.id)}
                      >
                        <div className="relative">
                          <img
                            src={playlist.images[0].url}
                            alt={playlist.name}
                            className="w-10 h-10 mr-2 rounded-md"
                          />
                        </div>
                        <div
                          className="flex flex-col text-left flex-grow font-normal"
                          style={{ fontSize: "0.6rem" }}
                        >
                          <div className="hover:underline w-fit cursor-pointer">
                            {playlist.name}
                          </div>
                          <div className="flex flex-row text-[rgba(167,167,167,255)] group-hover:text-white">
                            <div
                              className="hover:underline cursor-pointer font-normal"
                              style={{ fontSize: "0.5rem" }}
                            >
                              {playlist.owner.display_name}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : console.log("no playlist")}
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center h-screen justify-evenly md:items-center text-black w-4/6  pl-2">
            {/*center div */}
            <div className="h-full w-full bg-zinc-900 mx-1 my-2 shadow-xl rounded-md p-5 overflow-hidden justify-between">
              {show == 1 ? (
                <Playlist
                  playlists={playlistID}
                  deviceSel={deviceSel}
                  color={color}
                  current={current}
                  setCurrent={setCurrent}
                />
              ) : show == 2 ? (
                <div className="h-screen flex flex-col mb-10">
                  <div className="flex flex-row justify-around">
                    <input
                      type="text"
                      name="track"
                      placeholder="Search"
                      className="appearance-none border-2 w-max border-gray-200 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg mx-5 my-5 mr-5"
                      value={search.track}
                      onChange={handleOnChange}
                    />
                    <select
                      name="types"
                      onChange={handleSelectChange}
                      className="m-8 w-full"
                    >
                      <option className="text-trasnparent" disabled="selected">
                        Select option
                      </option>
                      {types.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="search"
                      name="artist"
                      className="appearance-none border-2 w-max border-gray-200 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg mx-5 my-5 mr-5"
                      value={search.artist}
                      onChange={handleOnChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full py-4 bg-green-600 rounded-lg text-green-100 hover:bg-green-400 hover:text-white hover:underline"
                    onClick={handleChange}
                  >
                    <div className="flex flex-row items-center justify-center ">
                      <div className="mr-2"></div>
                      <div className="font-bold ">Search</div>
                    </div>
                  </button>
                  <div className="flex flex-col justify-start mt-2  h-full text-white text-xs overflow-auto flex-grow">
                    {songs.map((song) => (
                      <div
                        key={song.id}
                        className="flex flex-row m-1 align-middle hover:bg-zinc-600 p-2 justify-between group items-center"
                        onClick={() => (
                          handlePlayMusic(song.uri), handleCurrent()
                        )}
                      >
                        <div className="relative">
                          <img
                            src={song.image}
                            alt={song.name}
                            className="w-12 mr-2 rounded-md"
                          />
                          <div className="absolute rounded-md inset-0 flex items-center justify-center mr-2 opacity-0 right-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-70 cursor-pointer">
                            <svg
                              width="10px"
                              height="10px"
                              viewBox="-3 0 28 28"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                              fill="#ffffff"
                              stroke="#ffffff"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <title>play</title>{" "}
                                <desc>Created with Sketch Beta.</desc>{" "}
                                <defs> </defs>{" "}
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                  sketch:type="MSPage"
                                >
                                  {" "}
                                  <g
                                    id="Icon-Set-Filled"
                                    sketch:type="MSLayerGroup"
                                    transform="translate(-419.000000, -571.000000)"
                                    fill="#ffffff"
                                  >
                                    {" "}
                                    <path
                                      d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
                                      id="play"
                                      sketch:type="MSShapeGroup"
                                    >
                                      {" "}
                                    </path>{" "}
                                  </g>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="flex flex-col text-left flex-grow ">
                          <div className="hover:underline w-max cursor-pointer">
                            {song.name}
                          </div>
                          <div className="flex flex-row text-[rgba(167,167,167,255)] group-hover:text-white">
                            <div
                              className="hover:underline cursor-pointer"
                              style={{ fontWeight: "10", fontSize: "0.6rem" }}
                            >
                              {song.artist}
                            </div>
                            <div
                              className="ml-1 hover:underline cursor-pointer"
                              style={{ fontWeight: "10", fontSize: "0.6rem" }}
                            >
                              {song.album}
                            </div>
                          </div>
                        </div>
                        <div className="ml-auto flex flex-row items-center ">
                          <button className="m-1 opacity-0 right-0 transition-opacity duration-200 group-hover:opacity-100">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 24.00 24.00"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="#ffffff"
                                strokeWidth="0.768"
                              >
                                {" "}
                                <path
                                  d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                                  fill="#ffffff"
                                ></path>{" "}
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                                  fill="#ffffff"
                                ></path>{" "}
                              </g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                  d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                                  fill="#ffffff"
                                ></path>{" "}
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                                  fill="#ffffff"
                                ></path>{" "}
                              </g>
                            </svg>
                          </button>
                          <div className="m-1 text-[rgba(167,167,167,255)] text-xs font-thin mx-5">
                            {song.duration}
                          </div>
                          <button className=" opacity-0 right-0 transition-opacity duration-200 group-hover:opacity-100">
                            <svg
                              fill="#ffffff"
                              height="100%"
                              width="12px"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 32.055 32.055"
                              xmlSpace="preserve"
                              stroke="#ffffff"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <g>
                                  {" "}
                                  <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967 C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"></path>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : show == 3 ? (
                <div>menu</div>
              ) : (
                <div>hola</div>
              )}
            </div>
          </div>
          <div className="flex flex-col text-center  h-screen justify-evenly md:items-center text-black w-1/6  pl-2 pr-2">
            {/*last div */}
            <div className="h-full w-full bg-zinc-900 shadow-xl rounded-md mx-5 my-2 flex flex-col justify-start py-9 items-start">
              <p
                className=" font-normal text-left text-white ml-8"
                style={{ fontWeight: "15", fontSize: "0.7rem" }}
              >
                Select a device:
              </p>
              <select
                name="devices"
                onChange={handleDeviceChange}
                className="m-8 w-100"
              >
                <option className="text-trasnparent" value={"nada"}>
                  Select option
                </option>
                {console.log(devices)}

                {devices.length != 0
                  ? devices.devices.map((item, index) => (
                      <option key={item + index} value={item.id}>
                        {item.name}
                        {console.log(item)}
                      </option>
                    ))
                  : console.log("hola")}
              </select>
            </div>
          </div>
          {current.length != 0 ? (
            <div className="fixed bottom-0 left-0 w-full bg-zinc-800  h-24 z-10 text-white justify-center flex flex-row items-center">
              <div className="text-lg text-white font-normal items-center mx-12">
                Currently playing:{" "}
              </div>
              <div className="relative flex flex-row m-3 items-center ">
                <img
                  src={current.item.album.images[0].url}
                  alt={current.item.name}
                  className="w-12 mr-2 rounded-md"
                />
                <div className="flex flex-col text-left flex-grow ">
                  <div className="hover:underline w-max cursor-pointer">
                    {current.item.name}
                  </div>
                  <div className="flex flex-row text-[rgba(167,167,167,255)] group-hover:text-white">
                    <div
                      className="hover:underline cursor-pointer"
                      style={{ fontWeight: "10", fontSize: "0.6rem" }}
                    >
                      {current.item.artists[0].name}
                    </div>
                    <div
                      className="ml-1 hover:underline cursor-pointer"
                      style={{ fontWeight: "10", fontSize: "0.6rem" }}
                    >
                      {current.item.album.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            console.log("yei")
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
