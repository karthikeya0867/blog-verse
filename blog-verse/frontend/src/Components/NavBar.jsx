import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
    return (
        <nav className="flex bg-white justify-evenly h-16 fixed top-0 left-0 right-0 items-center border-[lightgrey] border-b-1">
            <div className="flex items-center">
                <img src="./blog-logo.png" alt="logo" className="w-15 h-15 rounded-4xl"/>
                <h1 className="text-xl font-bold cursor-pointer">BlogVerse</h1>
            </div>
            <div className='relative flex items-center'>
            <FontAwesomeIcon icon={faHome} className='text-blue-500'/>
            <button className=" text-blue-700 cursor-pointer hover:bg-gray-100 px-6 py-2  rounded-xl">Home</button>
            </div>
            <div className="flex gap-5">
                <button className="font-semibold text-gray-700 cursor-pointer">Sign In</button>
                <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-2xl cursor-pointer">Sign Up</button>
            </div>
        </nav>
    )
}
export default NavBar