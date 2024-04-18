import React, { useState } from "react";

import { fetchSpotifyApi } from "../../api/spotifyAPI";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
    navigate("/dashboard");
  };

  const goBack = (a) => {
    navigate(a);
  };
  return (
    <>
      <div
        className="container px-5 mx-auto pt-3 pb-3 min-w-dvh f-full"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,.2),rgba(0,255,0,.7))",
        }}
      >
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="spoti-intro"
          style={{ width: "10%" }}
          className="mt-0"
        />
        <div className="flex justify-center items-center h-full">
          <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl lg:w-2/5 md:w-1/2 w-2/3 ">
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
                  name="confirm-password"
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
    </>
  );
};

export default Register;
