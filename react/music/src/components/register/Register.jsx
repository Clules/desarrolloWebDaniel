import React, { useState } from "react";

import { fetchSpotifyApi } from "../../api/spotifyAPI";
import { useNavigate } from "react-router-dom";

import Slideshow from "../slideshow/Slideshow";
import StarsBackground from "../stars/StarsBackground";

const Register = () => {
  const images = [
    "/src/spotify-icons-logos/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Green.png",
    "/src/spotify-icons-logos/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png",
  ];

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const newValues = {
      ...form,
      [e.target.name]: e.target.value,
    };
    console.log(newValues);
    setForm(newValues);
  };

  const handleLogin = async () => {
    const client_id = "41ba1a8c200940ae8e398229944e8a43";
    const client_secret = "2420d524c6c3495d90c37dfa7110227d";
    const url = "https://accounts.spotify.com/api/token";
    const body = "grant_type=client_credentials";
    const token = "Basic " + btoa(client_id + ":" + client_secret);
    const response = await fetchSpotifyApi(
      url,
      "POST",
      body,
      "application/x-www-form-urlencoded",
      token
    );
    console.log(response);

    localStorage.setItem("token", response.access_token);

    navigate("/dashboard");
  };

  const goBack = (a) => {
    navigate(a);
  };
  return (
    <>
      <div
        className="md:container md:mx-0 relative"
        style={{
          backgroundColor:
            // "linear-gradient(to right, rgba(0,0,0,.4),rgba(0,255,0,.7))"
            "rgb(9 9 11)",
        }}
      >
        <StarsBackground />
        <Slideshow images={images} />
        <div className="flex flex-row h-screen w-screen justify-center items-center bg-zync-950 absolute inset-0">
          <div className="w-1/3 flex justify-around items-center">
            <div className="bg-white h-2/3 px-10 pt-10 pb-5 flex flex-col w-full rounded-xl shadow-md shadow-gray-400 mt-10">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">
                Register
              </h2>
              <form action="" className="w-full">
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="name" className="text-gray-500 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Please insert your name"
                    className="appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    onChange={handleOnChange}
                    value={form.name}
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="username" className="text-gray-500 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Please insert your username"
                    className="appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    onChange={handleOnChange}
                    value={form.username}
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="email" className="text-gray-500 mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Please insert your email"
                    className="appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    onChange={handleOnChange}
                    value={form.email}
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="password" className="text-gray-500 mb-2">
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="Please insert your password"
                    className="appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    onChange={handleOnChange}
                    value={form.password}
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label
                    htmlFor="confirm-password"
                    className="text-gray-500 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    name="confirmpassword"
                    placeholder="Please confirm your password"
                    className="appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    onChange={handleOnChange}
                    value={form.confirmpassword}
                  />
                </div>
                <div id="button" className="flex flex-col w-full my-5">
                  <button
                    type="button"
                    className="w-full py-4 bg-green-600 rounded-lg text-white hover:bg-green-400 hover:text-white mt-4"
                    onClick={handleLogin}
                  >
                    <div className="flex flex-row items-center justify-center ">
                      <div className="mr-2"></div>
                      <div className="font-bold ">Register</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="w-full py-4 bg-gray-600 rounded-lg text-white hover:bg-gray-400 hover:text-white mt-4"
                    onClick={() => goBack("/login")}
                  >
                    <div className="flex flex-row items-center justify-center ">
                      <div className="mr-2"></div>
                      <div className="font-bold ">Login</div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
