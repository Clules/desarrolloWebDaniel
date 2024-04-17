const Register = () => {
  return (
    <>
      <div
        className="container px-6 mx-auto "
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,.2),rgba(0,255,0,.7))",
        }}
      >
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="spoti-intro"
          style={{ width: "10%" }}
          className="mt-4"
        />
        <div className="flex justify-center items-center h-screen">
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
                  id="name"
                  placeholder="Please insert your name"
                  className="appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="username" className="text-gray-500 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Please insert your username"
                  className="appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="email" className="text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Please insert your email"
                  className="appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
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
                  className="appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
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
                  type="password"
                  id="confirm-password"
                  placeholder="Please confirm your password"
                  className="appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="button" className="flex flex-col w-full my-5">
                <button
                  type="button"
                  className="w-full py-4 bg-green-600 rounded-lg text-white hover:bg-green-400 hover:text-white mt-4"
                >
                  <div className="flex flex-row items-center justify-center ">
                    <div className="mr-2"></div>
                    <div className="font-bold ">Register</div>
                  </div>
                </button>
                <button
                  type="button"
                  className="w-full py-4 bg-gray-600 rounded-lg text-white hover:bg-gray-400 hover:text-white mt-4"
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
