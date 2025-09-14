const NavBar = () => {
    return (
        <nav className="flex justify-around h-16 items-center border-[lightgrey] border-b-1">
            <h1 className="text-xl font-bold cursor-pointer">BlogVerse</h1>
            <button className="text-blue-500 cursor-pointer hover:bg-blue-200 px-5 py-2 rounded-xl">Home</button>
            <div className="flex gap-5">
                <button className="font-semibold text-gray-700 cursor-pointer">Sign In</button>
                <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-2xl cursor-pointer">Sign Up</button>
            </div>
        </nav>
    )
}
export default NavBar