import React, { useState } from "react";
import { fetchSpotifyApi } from "../../api/spotifyAPI";

const Playlist = ({ playlists, deviceSel, color, current, setCurrent }) => {
  const handlePlayMusic = async (song) => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const data = {
      uris: [song],
    };

    console.log(song);
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

  const colors = ["yellow", "cyan", "violet", "rose", "red", "orange", "lime"];
  const colorClass = colors[color];

  return (
    <div
      className={`flex flex-col justify-start mt-2 h-full w-full text-white text-xs overflow-hidden flex-grow bg-gradient-to-b from-${colorClass}-500  from-10% to-60%`}
    >
      <div className="flex flex-row p-5 h-1/3">
        {
          <img
            src={playlists.images[0].url}
            className="h-full object-cover aspect-square shadow-lg shadow-black"
          />
        }
        <div className="ml-5 flex flex-col w-full justify-center">
          <div
            className="text-left mb-2"
            style={{ fontWeight: "10", fontSize: "0.6rem" }}
          >
            {playlists.public ? "Public" : "Private"} playlist
          </div>
          <div className="text-left text-5xl font-bold">{playlists.name}</div>
        </div>
      </div>
      <div className="relative flex flex-col h-full w-full ">
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div
          className="flex flex-row h-1/12 w-100 text-[rgba(167,167,167,255)] text-sm justify-between z-10 mx-4 pr-8 font-normal border-b"
          style={{ fontSize: "0.6rem" }}
        >
          <div className=" w-4  text-left pl-1 mr-0  ">#</div>

          <div className=" w-3/12  text-left  ">Title</div>
          <div className=" w-3/12  text-left  ">Album</div>
          {playlists.collaborative ? (
            <div className="w-4/12 flex flex-row  ">
              <div className=" w-1/2  text-left  ">Added By</div>
              <div className={`w-1/2  text-left  `}>Date added</div>
            </div>
          ) : (
            <div className={`w-4/12   text-left `}>Date added</div>
          )}

          <div className=" w-1/12  text-center ">Duration</div>
        </div>
        <div className="w-full h-full  py-1 px-0">
          <div className="w-full h-full overflow-auto flex flex-col ">
            {playlists.tracks.items.map((song, index) => (
              <div
                className="flex flex-row h-auto w-100 text-[rgba(167,167,167,255)] text-sm justify-between z-10 mx-4 ml-1 font-medium text-white items-center group hover:bg-zinc-600 hover:bg-opacity-40"
                style={{ fontSize: "0.6rem" }}
                onClick={() => (
                  handlePlayMusic(song.track.uri), handleCurrent()
                )}
                key={song.track.name + index}
              >
                <div className="relative">
                  <div className="w-4 text-left pl-1 mr-0 text-center opacity-100  transition-opacity duration-300 group-hover:opacity-0">
                    {index + 1}
                  </div>
                  <div className="absolute rounded-md inset-0 flex items-center justify-center pl-2 opacity-0 right-0 transition-opacity duration-300 group-hover:opacity-100  cursor-pointer z-10">
                    <svg
                      width="7px"
                      height="7px"
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
                        <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
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

                <div className=" w-3/12 text-left flex flex-row">
                  <img
                    src={song.track.album.images[0].url}
                    className="w-9 h-9 m-2 rounded-md"
                  />
                  <div className="flex flex-col text-left flex-grow justify-center">
                    <div className="hover:underline w-max cursor-pointer text-white">
                      {song.track.name}
                    </div>

                    <div
                      className=" text-[rgba(167,167,167,255)] hover:underline cursor-pointer group-hover:text-white w-fit"
                      style={{ fontSize: "0.6rem" }}
                    >
                      {song.track.artists[0].name}
                    </div>
                  </div>
                </div>
                <div className=" w-3/12  text-left  ">
                  <div
                    className="ml-1 hover:underline cursor-pointer w-fit"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {song.track.album.name}
                  </div>
                </div>
                {playlists.collaborative ? (
                  <div className="w-4/12 flex flex-row  ">
                    <div className=" w-1/2  text-left  ">Someone</div>
                    <div className="w-1/2  text-left  ">
                      <div style={{ fontSize: "0.6rem" }}>
                        {new Date(song.added_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-4/12  text-left ">
                    <div style={{ fontSize: "0.6rem" }}>
                      {new Date(song.added_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                )}

                <div className=" w-1/12  text-center justify-around flex flex-row pl-0">
                  <button className="m-1 opacity-0 right-0 transition-opacity duration-200 group-hover:opacity-100">
                    <svg
                      width="8px"
                      height="8px"
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
                  <div className="mx-2">
                    {`${Math.floor(song.track.duration_ms / 60000)}:${(
                      (song.track.duration_ms % 60000) /
                      1000
                    )
                      .toFixed(0)
                      .padStart(2, "0")}`}
                  </div>

                  <button className=" opacity-0 right-0 transition-opacity duration-200 group-hover:opacity-100 mr-2">
                    <svg
                      fill="#ffffff"
                      height="100%"
                      width="8px"
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
      </div>
      {/* playlists.tracks.items.map((song) => (
        <div
          className="flex flex-row h-1/12 w-100 text-[rgba(167,167,167,255)] text-sm justify-between z-10 mx-4 pr-8 font-normal border-b"
          style={{ fontSize: "0.6rem" }}
        >
          <div className=" w-4  text-left pl-1 mr-0  ">#</div>

          <div className=" w-3/12  text-left  ">Title</div>
          <div className=" w-3/12  text-left  ">Album</div>
          {playlists.collaborative ? (
            <div className="w-4/12 flex flex-row  ">
              <div className=" w-1/2  text-left  ">Added By</div>
              <div className={`w-1/2  text-left  `}>Date added</div>
            </div>
          ) : (
            <div className={`w-4/12   text-left `}>Date added</div>
          )}

          <div className=" w-1/12  text-center ">Duration</div>
        </div>))
       */}
    </div>
  );
};

export default Playlist;
