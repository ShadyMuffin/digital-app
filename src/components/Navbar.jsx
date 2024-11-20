import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" grid place-content-center ">
      <ul className="text-3xl font-semibold rounded-xl text-pink-600 flex justify-evenly m-5 hover:text-purple-600 border-gray-600 p-9 w-[800px] mb-24 hover:bg-slate-800">
        <li className="hover:text-pink-600 ease-in-out duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-pink-600 ease-in-out duration-300">
          <Link to="/service">Services</Link>
        </li>
        <li className="hover:text-pink-600 ease-in-out duration-300">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-pink-600 ease-in-out duration-300">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
