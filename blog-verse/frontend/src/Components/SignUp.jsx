import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faEnvelope, faLock, faEye} from '@fortawesome/free-solid-svg-icons';
const SignUp = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
            <div className="flex flex-col items-center p-18  gap-5">
                <h1 className="text-4xl text-blue-600 font-bold">Join BlogVerse</h1>
                <p className="text-xl text-gray-500 text-center font-normal ">Create your account and <br /> start your Blogging journey today</p>
                <form className="flex flex-col rounded-2xl gap-6 bg-white  min-w-1/3 shadow-2xl  py-7 items-center">
                    <div className="w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Full Name</p>
                        <div className='relative'>
                            <FontAwesomeIcon icon={faUser} className='absolute top-4 left-3' />
                            <input type="text" placeholder="Enter Your Full Name"
                                className="border-1 border-gray-300 w-full py-3 px-10 rounded-xl focus:outline-none
                      focus:border-purple-500" />
                        </div>
                    </div>
                    <div className="w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Email</p>
                        <div className='relative'>
                            <FontAwesomeIcon icon={faEnvelope} className='absolute left-3 top-4' />
                            <input type="email" placeholder="Enter Your Email"
                                className="border-1 border-gray-300 w-full py-3 px-10 rounded-xl focus:outline-none
                      focus:border-purple-500" />
                        </div>
                    </div>
                    <div className="w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Password</p>
                        <div className="relative">
                            <FontAwesomeIcon icon={faLock} className='absolute left-3 top-4' />
                            <input type="password" placeholder="Enter Your Password"
                                className="border-1 border-gray-300 w-full py-3 px-10 rounded-xl focus:outline-none
                      focus:border-purple-500" />
                            <FontAwesomeIcon icon={faEye} className='absolute right-3 top-4' />
                        </div>
                    </div>
                    <div className="w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                        <div className="relative">
                        <FontAwesomeIcon icon={faLock} className='absolute left-3 top-4' />
                        <input type="password" placeholder="Confirm Your Password"
                            className="border-1 border-gray-300 w-full py-3 px-10 rounded-xl focus:outline-none
                      focus:border-purple-500" />
                        <FontAwesomeIcon icon={faEye} className='absolute right-3 top-4' />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-[90%] rounded-xl p-4 items-center bg-gray-50 border border-gray-200">
                        <input type="checkbox" className="h-4 w-4" />
                        <p className="text-sm">I agree to the <span className="text-purple-500 hover:underline font-semibold">Terms of Service</span> and <span className="text-purple-500 hover:underline font-semibold">Privacy Policy</span></p>
                    </div>
                    <button className="w-[90%] text-white rounded-3xl bg-purple-500 font-semibold py-4">
                        <FontAwesomeIcon icon={faUser} />
                        Create Account
                    </button>
                    <div className="border-b-1 border-[lightgray] w-[90%] mt-1" />
                    <p className="text-gray-500 font-semibold">
                        Already Have An Account?
                        <span className="cursor-pointer text-purple-500"> Sign In Here</span>
                    </p>
                    <button className="text-gray-700 bg-gray-100 rounded-xl font-semibold w-fit py-3 px-6 cursor-pointer"><FontAwesomeIcon icon={faArrowLeft} /> Back To Home</button>
                </form>
            </div>
        </div>
    )
}
export default SignUp