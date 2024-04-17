const Dashboard = () => {
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
          <div className="h-5/6 w-full bg-zinc-900 mx-1 mt-1 mb-2 shadow-xl rounded-md"></div>
        </div>
        <div className="flex flex-col text-center  h-screen justify-evenly md:items-center text-black w-4/6  pl-2">
          <div className="h-full w-full bg-zinc-900 mx-1 my-2 shadow-xl rounded-md"></div>
        </div>
        <div className="flex flex-col text-center  h-screen justify-evenly md:items-center text-black w-1/6  pl-2 pr-2">
          <div className="h-full w-full bg-zinc-900 shadow-xl rounded-md mx-5 my-2 "></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
