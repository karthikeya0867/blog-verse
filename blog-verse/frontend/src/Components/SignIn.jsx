import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEye, faEnvelope, faEyeSlash ,faLock , faSignIn} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const SignIn = () => {
  const [showPassword , setShowPassword] = useState(false);
  const handlePassword = () => setShowPassword(prev => !prev);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <form className="flex flex-col mt-10 bg-white gap-7 min-w-1/3 shadow-2xl rounded-2xl items-center px-4 py-8">
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold text-2xl">Sign In</p>
            <p className="text-gray-600">Access Your Account</p>
          </div>
          <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md text-gray-700 font-semibold">Email Address</p>
            <div className="group relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="group-focus-within:text-blue-500 absolute left-3 top-4"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border-1 border-gray-300 w-full py-3 px-10 rounded-xl focus:outline-none
                      focus:border-purple-500"
              />
            </div>
          </div>
          <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md text-gray-700 font-semibold">Password</p>
            <div className="group relative">
              <FontAwesomeIcon
                icon={faLock}
                className="group-focus-within:text-blue-500 absolute left-3 top-4"
              />
              <input
                type={ showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="border-1 border-gray-300 w-full py-3 px-10 rounded-xl focus:outline-none
                      focus:border-purple-500"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                onClick={handlePassword}
                className="group-focus-within:text-blue-500 absolute right-3 top-4 cursor-pointer"
              />
            </div>
            <div className="flex mt-4 justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <p>Remember Me</p>
              </div>
              <p className="text-blue-500 font-semibold ">Forgot Password?</p>
            </div>
          </div>
          <button className="w-[90%] text-white shadow-lg rounded-3xl bg-purple-500 font-semibold py-4">
           <FontAwesomeIcon icon={faSignIn} /> Sign In
          </button>
          <div className="border-b-1 border-[lightgray] w-[90%] mt-1" />
          <p className="flex gap-2 text-gray-500 font-semibold">
            Don't Have An Account?
            <Link to='/signup' className="cursor-pointer text-purple-500">
              {" "}
              Create One Here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default SignIn;
