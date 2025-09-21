import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="z-20 flex bg-white justify-evenly h-16 fixed top-0 left-0 right-0 items-center border-[lightgrey] border-b-1">
      <Link to="/">
        <div className="flex items-center">
          <label htmlFor="blog-logo">
            <img
              src="./blog-logo.png"
              alt="logo"
              className="w-15 h-15 rounded-4xl cursor-pointer"
            />
          </label>
          <h1 id="blog-logo" className="text-xl font-bold cursor-pointer">
            BlogVerse
          </h1>
        </div>
      </Link>

      <Link to="/" className="flex items-center gap-1 text-blue-700 cursor-pointer hover:bg-gray-100 px-6 py-2  rounded-xl">
        <FontAwesomeIcon
          icon={faHome}
          htmlFor="home"
          className="text-blue-500"
        />
        <span id="home">Home</span>
      </Link>

      <div className="flex items-center gap-5">
        <Link
          to="/signin"
          className="font-semibold text-xs sm:text-sm text-gray-700 cursor-pointer"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white font-semibold text-xs px-3 py-2 sm:text-sm  sm:px-4 sm:py-2 rounded-2xl cursor-pointer"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
