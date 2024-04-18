import React, { useState } from "react";

const Dashboard = () => {
  const [search, setSearch] = useState({
    search: "",
  });

  const handleOnChange = (e) => {
    const newValues = {
      ...search,
      [e.target.name]: e.target.value,
    };
    setSearch(newValues);
  };
  const searchLook = async () => {
    console.log(search);
  };
  return (
    <>
      <div
        className="container p-0  h-screen m-0 flex flex-row w-dvh pt-1"
        style={{
          background: "black",
        }}
      >
        <div className="flex flex-col text-center h-screen justify-evenly md:items-center text-black w-1/6 pl-2">
          <div className="h-1/6 w-full bg-zinc-900 mx-1 mt-2 mb-1 shadow-xl rounded-md flex flex-col justify-around py-9">
            <button class="relative rounded-lg px-1 py-3 my-1 mx-0 h-10 flex flex-row text-white stroke-white fill-white hover:text-green-500 hover:fill-green-500 hover:stroke-green-500 hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-1/3 h-full stroke-currentColor fill-currentColor "
              >
                {" "}
                <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z" />
              </svg>
              <p class="text-xs font-normal text-left align-middle">Home</p>
            </button>
            <button class="relative rounded-lg px-1 py-3 my-1 mx-0 h-10 flex flex-row text-white stroke-white fill-white hover:text-green-500 hover:fill-green-500 hover:stroke-green-500 hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-1/3 h-full stroke-currentColor fill-currentColor "
              >
                {" "}
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
              </svg>
              <p class="text-xs font-normal text-left align-middle">Search</p>
            </button>
          </div>
          <div className="h-5/6 w-full bg-zinc-900 mx-1 mt-1 mb-2 shadow-xl rounded-md ">
            <div class="relative rounded-lg px-1 py-0 my-2 mx-0 h-2/12 flex flex-row items-stretch text-white stroke-white fill-white hover:text-green-500 hover:fill-green-500 hover:stroke-green-500 hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-1/3 h-11 stroke-currentColor fill-currentColor mt-2.5 ml-8"
              >
                {" "}
                <path
                  d="M3.9997,3 L5.9897,3 C7.04351818,3 7.9078157,3.81639669 7.98421089,4.85080841 L7.9897,5 L7.9897,23 C7.9897,24.0538182 7.17330331,24.9181157 6.13889159,24.9945109 L5.9897,25 L3.9997,25 C2.94588182,25 2.0815843,24.1836033 2.00518911,23.1491916 L1.9997,23 L1.9997,5 C1.9997,3.94618182 2.81609669,3.0818843 3.85050841,3.00548911 L3.9997,3 L5.9897,3 L3.9997,3 Z M10.9947,3 L12.9897,3 C14.0435182,3 14.9078157,3.81639669 14.9842109,4.85080841 L14.9897,5 L14.9897,23 C14.9897,24.0538182 14.1733033,24.9181157 13.1388916,24.9945109 L12.9897,25 L10.9947,25 C9.93992727,25 9.07649752,24.1836033 9.00018319,23.1491916 L8.9947,23 L8.9947,5 C8.9947,3.94618182 9.81018554,3.0818843 10.8453842,3.00548911 L10.9947,3 L12.9897,3 L10.9947,3 Z M20.1303,5.0264 C20.9735941,5.0264 21.7460232,5.56408858 22.0232306,6.38601897 L22.0693,6.5434 L25.9293,22.0264 C26.1851182,23.0487182 25.6026719,24.0847037 24.6168316,24.4098625 L24.4733,24.4514 L22.5103,24.9404 C22.3483,24.9804 22.1853,25.0004 22.0253,25.0004 C21.1810647,25.0004 20.4094661,24.4618256 20.1323596,23.6406247 L20.0863,23.4834 L16.2253,8.0004 C15.9704364,6.97617273 16.552926,5.94101157 17.5387684,5.61680139 L17.6823,5.5754 L19.6453,5.0864 C19.8073,5.0464 19.9703,5.0264 20.1303,5.0264 Z M5.9897,4.5 L3.9997,4.5 C3.75525556,4.5 3.55031728,4.67777778 3.50779328,4.91042524 L3.4997,5 L3.4997,23 C3.4997,23.2444444 3.67747778,23.4493827 3.91012524,23.4919067 L3.9997,23.5 L5.9897,23.5 C6.23503333,23.5 6.43928025,23.3222222 6.48163964,23.0895748 L6.4897,23 L6.4897,5 C6.4897,4.75555556 6.31271235,4.55061728 6.07953813,4.50809328 L5.9897,4.5 Z M12.9897,4.5 L10.9947,4.5 C10.7493667,4.5 10.5451198,4.67777778 10.5027604,4.91042524 L10.4947,5 L10.4947,23 C10.4947,23.2444444 10.6716877,23.4493827 10.9048619,23.4919067 L10.9947,23.5 L12.9897,23.5 C13.2350333,23.5 13.4392802,23.3222222 13.4816396,23.0895748 L13.4897,23 L13.4897,5 C13.4897,4.75555556 13.3127123,4.55061728 13.0795381,4.50809328 L12.9897,4.5 Z M20.1303,6.5264 L20.0688,6.53015 L20.0688,6.53015 L20.0073,6.5414 L18.0453,7.0304 C17.8070778,7.08995556 17.6518185,7.31148642 17.6673137,7.54750288 L17.6813,7.6364 L21.5413,23.1204 C21.6063,23.3804 21.8383,23.5004 22.0253,23.5004 L22.086675,23.496525 L22.086675,23.496525 L22.1473,23.4844 L24.1103,22.9954 C24.3485222,22.9358444 24.5037815,22.7151037 24.4882863,22.4785605 L24.4743,22.3894 L20.6133,6.9054 C20.5483,6.6444 20.3173,6.5264 20.1303,6.5264 Z"
                  id="🎨-Color"
                />
              </svg>
              <p class="text-xs font-normal text-left mt-3.5 w-full">
                Your Library
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center  h-screen justify-evenly md:items-center text-black w-4/6  pl-2">
          <div className="h-full w-full bg-zinc-900 mx-1 my-2 shadow-xl rounded-md">
            <input
              type="text"
              name="search"
              placeholder="Please insert your username or email"
              className="appearance-none border-2 w-max border-gray-200 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg mx-5 my-5 mr-5"
              value={search.search}
              onChange={handleOnChange}
            />
            <button
              type="button"
              className="w-full py-4 bg-green-600 rounded-lg text-green-100 hover:bg-green-400 hover:text-white hover:underline"
              onClick={searchLook}
            >
              <div className="flex flex-row items-center justify-center ">
                <div className="mr-2"></div>
                <div className="font-bold ">Search</div>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col text-center  h-screen justify-evenly md:items-center text-black w-1/6  pl-2 pr-2">
          <div className="h-full w-full bg-zinc-900 shadow-xl rounded-md mx-5 my-2 "></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
