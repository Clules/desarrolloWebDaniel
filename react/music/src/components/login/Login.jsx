import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { fetchSpotifyApi } from "../../api/spotifyAPI";

import Slideshow from "../slideshow/Slideshow";
import StarsBackground from "../stars/StarsBackground";

const Login = () => {
  const images = [
    "/src/spotify-icons-logos/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Green.png",
    "/src/spotify-icons-logos/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png",
  ];

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const newValues = {
      ...form,
      [e.target.name]: e.target.value,
    };
    console.log(newValues);
    setForm(newValues);
  };

  const navigate = useNavigate();

  const handleLogin = async (a) => {
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
            <div className="bg-white h-2/3 px-10 pt-10 pb-5 flex flex-col w-full rounded-xl mt-10">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Login
              </h2>
              <form action="" className="w-full">
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="username" className="text-gray-500 mb-2">
                    Username or email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleOnChange}
                    placeholder="Please insert your username or email"
                    className="appearance-none border-2 border-gray-200 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="password" className="text-gray-500 mb-2">
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    value={form.password}
                    onChange={handleOnChange}
                    placeholder="Please insert your password"
                    className="appearance-none border-2 border-gray-200 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  />
                  <a
                    href="#"
                    className="text-xs w-full text-left font-medium text-gray-500 hover:text-black hover:underline mt-2"
                  >
                    Forgot password?!
                  </a>
                </div>
                <div id="button" className="flex flex-col w-full my-5">
                  <button
                    type="button"
                    className="w-full py-4 bg-green-600 rounded-lg text-green-100 hover:bg-green-400 hover:text-white hover:underline"
                    onClick={() => handleLogin("/dashboard")}
                  >
                    <div className="flex flex-row items-center justify-center ">
                      <div className="mr-2"></div>
                      <div className="font-bold ">Login</div>
                    </div>
                  </button>
                  <div className="flex justify-center items-center mt-5 mb-5">
                    <span className="w-full border border-black"></span>
                    <span className="px-4">Or</span>
                    <span className="w-full border border-black"></span>
                  </div>
                  <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative hover:bg-black hover:text-white hover:underline">
                    <span className="absolute left-4">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          fill="#EA4335 "
                          d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                        />
                        <path
                          fill="#34A853"
                          d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                        />
                        <path
                          fill="#4A90E2"
                          d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                        />
                      </svg>
                    </span>
                    <span>Sign in with Google</span>
                  </button>
                  <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative hover:bg-black hover:text-white hover:underline mt-2">
                    <span className="absolute left-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="27px"
                        height="27px"
                      >
                        <linearGradient
                          id="Ld6sqrtcxMyckEl6xeDdMa"
                          x1="9.993"
                          x2="40.615"
                          y1="9.993"
                          y2="40.615"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#2aa4f4" />
                          <stop offset="1" stopColor="#007ad9" />
                        </linearGradient>
                        <path
                          fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                          d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                        />
                        <path
                          fill="#fff"
                          d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                        />
                      </svg>
                    </span>
                    <span>Sign in with Facebook</span>
                  </button>

                  <div className="flex justify-evenly mt-5">
                    <a
                      href="#"
                      className="w-full text-center font-medium text-gray-500 hover:text-black hover:underline"
                      onClick={() => handleLogin("/register")}
                    >
                      Don't have an account yet?
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
