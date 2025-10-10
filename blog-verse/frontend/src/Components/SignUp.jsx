import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faArrowLeft,
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faInfoCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const SignUp = () => {
  const handlePassword = () => setShowPassword((prev) => !prev);
  const handleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);
  const [isCardOpen,setIsCardOpen] = useState(false);
  const [isLoading , setIsLoading] = useState(false);
  const [fullName ,setFullname] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) => {
    const {name , value} = event.target;
    setErrors((prevErrors) => {
    const newErrors = { ...prevErrors, [name]: "" };
    if (name === "password") {
      newErrors.confirmPassword = "";
    }
    return newErrors;
  });
    setSuccess("");
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [success, setSuccess] = useState("");
  const handleSubmit = (event) => {
    setIsLoading(true);
    setSuccess("");
    event.preventDefault();
    let newErrors = {};
    if (!formData.fullName) {
      newErrors.fullName = "Please Enter Your Full Name";
    }
    if (!formData.email) {
      newErrors.email = "Please Enter Your Email";
    }
    if (!formData.password) {
      newErrors.password = "Please Enter Your Password";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please Confirm Your Password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Your Passwords Donot Match";
    }
    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      setIsLoading(false);
    } else {
      setFullname(formData.fullName);
      console.log(fullName)
      console.log(formData)
      setTimeout( () => {
      setSuccess("Your Account Has Been SuccessFully Created");
      setIsCardOpen(true);
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setIsLoading(false);
    },3000);
  }
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="flex flex-col items-center p-16 gap-5">
        <h1 className="text-4xl text-center text-blue-600 font-bold">
          Join BlogVerse
        </h1>
        <p className="text-xl text-gray-500 text-center font-normal ">
          Create your account & <br /> start your Blogging journey today
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col rounded-2xl gap-6 bg-white w-[120%] sm:w-[70%]  xl:w-1/3 shadow-2xl  py-7 items-center"
        >
          <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md text-gray-700 font-semibold">Full Name</p>
            <div className="group relative">
              <FontAwesomeIcon
                icon={faUser}
                className="group-focus-within:text-blue-500 absolute top-4 left-3"
              />
              <input
                type="text"
                value={formData.fullName}
                name="fullName"
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="border-1 border-gray-300 w-full py-3 px-10 rounded-xl focus:outline-none
                      focus:border-purple-500"
              />
            </div>
            {errors.fullName && (
              <div className="  text-red-500 font-bold w-[90%] ">
                <FontAwesomeIcon className="text-xl" icon={faXmark} />{" "}
                {errors.fullName}
              </div>
            )}
          </div>
          <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md text-gray-700 font-semibold">Email</p>
            <div className="group relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-3 top-4 group-focus-within:text-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="border-1 border-gray-300 w-full py-3 px-10 rounded-xl focus:outline-none
                      focus:border-purple-500"
              />
            </div>
            {errors.email && (
              <div className="text-red-500 font-bold w-[90%]">
                <FontAwesomeIcon className="text-xl" icon={faXmark} />{" "}
                {errors.email}
              </div>
            )}
          </div>
          <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md text-gray-700 font-semibold">Password</p>
            <div className="group relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-3 top-4 group-focus-within:text-blue-500"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="border-1 border-gray-300 w-full py-3 px-10 rounded-xl focus:outline-none
                      focus:border-purple-500"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="group-focus-within:text-blue-500 absolute right-3 top-4 cursor-pointer"
                onClick={handlePassword}
              />
            </div>
            {errors.password && (
              <div className="text-red-500 w-[90%] font-bold">
                <FontAwesomeIcon className="text-xl" icon={faXmark} />{" "}
                {errors.password}
              </div>
            )}
          </div>
          <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md text-gray-700 font-semibold">
              Confirm Password
            </p>
            <div className="group relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-3 top-4  group-focus-within:text-blue-500"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                placeholder="Confirm Your Password"
                className="border-1 border-gray-300 w-full py-3 px-10 rounded-xl focus:outline-none
                      focus:border-purple-500"
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEye : faEyeSlash}
                className="group-focus-within:text-blue-500 absolute right-3 top-4 cursor-pointer"
                onClick={handleConfirmPassword}
              />
            </div>
            {errors.confirmPassword && (
              <div className="text-red-500 font-bold w-[90%]">
                <FontAwesomeIcon className="text-2xl" icon={faXmark} />{" "}
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <div className="flex flex-row gap-2 w-[90%] rounded-xl p-4 items-center bg-gray-50 border border-gray-200">
            <input type="checkbox" className="h-4 w-4" />
            <p className="text-sm">
              I agree to the{" "}
              <span className="text-purple-500 hover:underline font-semibold">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-purple-500 hover:underline font-semibold">
                Privacy Policy
              </span>
            </p>
          </div>
          {success && (
            <div className="flex items-center font-semibold gap-2 justify-center p-3 rounded-xl shadow-2xl bg-green-400 shadow-green-500 border-2 w-[90%] border-green-500">
              <FontAwesomeIcon className="text-2xl" icon={faInfoCircle} />
              {success}
            </div>
          )}
          <button
            type="submit"
            className="flex gap-2 items-center justify-center w-[90%] text-white rounded-3xl bg-purple-500 font-semibold py-4"
          >
            <FontAwesomeIcon icon={faUser} />
            {isLoading ? "Creating..." : "Create Account"}
          </button>
          <div className="border-b-1 border-[lightgray] w-[90%] mt-1" />
          <p className="flex flex-col items-center gap-2 text-gray-500 font-semibold">
            Already Have An Account?
            <Link to="/signin" className="cursor-pointer text-purple-500">
              {" "}
              Sign In Here
            </Link>
          </p>
          <Link
            to="/"
            className="text-gray-700 bg-gray-100 rounded-xl font-semibold w-fit py-3 px-6 cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back To Home
          </Link>
        </form>
        {isCardOpen && ( 
          <div className="fixed h-dvh w-dvw flex items-center justify-center">
          <div className="absolute h-dvh w-dvw bg-black opacity-50" />
          <div className="z-20 rounded-xl bg-white border-2 border-gray-300 p-6 flex flex-col gap-3">
            <p className="text-2xl font-extrabold">Hello {fullName} Welcome To Open Quill</p>
            <p>Your account has been succesfully created. Login to continue</p> 
            <div className="flex gap-3 ">
            <Link to="/signin" className="bg-blue-500 text-white px-5 py-3 rounded-xl font-extralight">Login</Link>
            <button onClick={() => setIsCardOpen(false)} className="bg-gray-200 text-black px-5 py-3 rounded-xl font-extralight">Close</button>
            </div>
          </div>
        </div>)}
        </div>
    </div>
  );
};
export default SignUp;
