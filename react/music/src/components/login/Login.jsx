const Login = () => {
  return (
    <>
      <div
        className="container px-5 mx-auto w-fit"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,.4),rgba(0,255,0,.7))",
        }}
      >
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <div>
              <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="spoti-intro"
                style={{ width: "70%" }}
              />
            </div>
          </div>
          <div className="w-full md:w-full lg:w-3/4 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Login
              </h2>
              <form action="" className="w-full">
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="username" className="text-gray-500 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Please insert your username"
                    className="appearance-none border-2 border-gray-200 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="password" className="text-gray-500 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Please insert your password"
                    className="appearance-none border-2 border-gray-200 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  />
                </div>
                <div id="button" className="flex flex-col w-full my-5">
                  <button
                    type="button"
                    className="w-full py-4 bg-green-600 rounded-lg text-green-100 hover:bg-green-400 hover:text-white "
                  >
                    <div className="flex flex-row items-center justify-center ">
                      <div className="mr-2"></div>
                      <div className="font-bold ">Login</div>
                    </div>
                  </button>
                  <div className="flex justify-evenly mt-5">
                    <a
                      href="#"
                      className="w-full text-center font-medium text-gray-500 hover:text-black"
                    >
                      Recover password!
                    </a>
                    <a
                      href="#"
                      className="w-full text-center font-medium text-gray-500 hover:text-black"
                    >
                      Register!
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
