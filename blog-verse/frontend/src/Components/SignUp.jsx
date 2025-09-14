const SignUp = () => {
    return (
        <div className="flex flex-col items-center mt-15 gap-5">
            <h1 className="text-4xl text-blue-500 font-bold">Join BlogVerse</h1>
            <p className="text-xl text-gray-700 text-center font-semibold">Create your account and <br /> start your Blogging journey today</p>
            <form className="flex flex-col rounded-2xl gap-5  w-1/4 shadow-2xl shadow-purple-500 py-7 items-center">
                <h1 className="text-3xl text-purple-500 font-bold">Sign Up</h1>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input type="text" placeholder="Enter Your Full Name"
                        className="border-1 border-gray-500 w-full p-3 rounded-xl focus:outline-none
                    focus:border-purple-500" />
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input type="email" placeholder="Enter Your Email"
                        className="border-1 border-gray-500 w-full p-3 rounded-xl focus:outline-none
                    focus:border-purple-500" />
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input type="password" placeholder="Enter Your Password"
                        className="border-1 border-gray-500 w-full p-3 rounded-xl focus:outline-none
                    focus:border-purple-500" />
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                    <input type="password" placeholder="Confirm Your Password"
                        className="border-1 border-gray-500 w-full p-3 rounded-xl focus:outline-none
                    focus:border-purple-500" />
                </div>
                <div className="flex gap-3 w-[90%] py-3 px-4 items-center justify-center">
                    <input type="checkbox" className="h-4 w-4" />
                    <p>I Agree to Terms Of Service & Privacy Policy</p>
                </div>
                <button className="w-[90%] text-white rounded-3xl bg-purple-500 font-semibold py-4">Create Account</button>
                <div className="border-b-1 border-[lightgray] w-[90%] mt-1" />
                <p className="text-gray-500 font-semibold">Already Have An Account? <span className="cursor-pointer text-purple-500">Sign In Here</span></p>
                <button className="text-gray-700 font-semibold w-[90%] py-4 cursor-pointer">Back To Home</button>
            </form>
        </div>
    )
}
export default SignUp